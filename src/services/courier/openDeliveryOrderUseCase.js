import { db } from "@/lib/prisma";

/**
 * Cria um novo pedido de entrega no Chegô
 * @param {Object} input
 */
export async function openDeliveryOrderUseCase(input) {
  const {
    source, // "RANGOOO" | "ESTABLISHMENT"
    externalOrderId, // id do pedido no sistema de origem
    pickupName, // nome do local de retirada
    pickupAddress,
    dropoffName, // nome do cliente final
    dropoffAddress,
    totalValue, // valor total do pedido
    notes, // observações opcionais
  } = input;

  /**
   * 1️⃣ Validações básicas (regra de negócio)
   */
  if (!source) {
    throw new Error("Source do pedido é obrigatória");
  }

  if (!pickupAddress || !dropoffAddress) {
    throw new Error("Endereço de retirada e entrega são obrigatórios");
  }

  if (totalValue == null || totalValue < 0) {
    throw new Error("Valor total inválido");
  }

  /**
   * 2️⃣ Regra importante:
   * pedidos vindos de sistemas externos precisam de externalOrderId
   */
  if (source !== "MANUAL" && !externalOrderId) {
    throw new Error("externalOrderId é obrigatório para pedidos externos");
  }

  /**
   * 3️⃣ Criação do pedido
   * status SEMPRE começa como OPEN
   */
  const deliveryOrder = await db.deliveryOrder.create({
    data: {
      source,
      externalOrderId,
      status: "OPEN",

      pickupName,
      pickupAddress,

      dropoffName,
      dropoffAddress,

      totalValue,
      notes,
    },
  });

  /**
   * 4️⃣ Retorna o pedido criado
   * (use-case nunca retorna response HTTP)
   */
  return deliveryOrder;
}
