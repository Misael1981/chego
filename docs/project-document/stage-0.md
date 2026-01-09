# 📦 Chegô — Visão Geral da Aplicação (Stage 0)

## 🎯 Objetivo do Produto

**Chegô** é uma plataforma de **intermediação de entregas**, conectando:

- Estabelecimentos

- Sistemas externos (ex: Rangooo)

- Entregadores (couriers)

O Chegô **não gerencia vendas**, apenas o **fluxo da entrega**.

Ele pode operar:

- Integrado ao SaaS **Rangooo**

- De forma independente (farmácias, lojas locais, etc.)

## 🧠 Princípios de Arquitetura

- **Separação clara de responsabilidades**

- **Regras de negócio isoladas da UI**

- **Sistema orientado a fluxo, não a telas**

- **Pronto para múltiplos clientes e origens**

A aplicação é pensada para:

- escalar

- mudar UI sem reescrever regra

- futuramente virar app mobile (React Native)

## 🏗️ Stack Atual

### Frontend

- **Next.js (App Router)**

- **Tailwind CSS**

- **shadcn/ui**

- **PWA (primeira fase)**

### Backend / Infra

- **Prisma ORM**

- **PostgreSQL (Neon)**

- **Node.js**

- **JavaScript (sem TypeScript por enquanto)**

## 🗂️ Estrutura de Pastas (Atual)

```
src/
 ├─ app/                # Rotas e UI (Next.js)
 ├─ components/         # Componentes reutilizáveis
 ├─ lib/
 │   └─ prisma.js       # Cliente Prisma (singleton)
 ├─ services/
 │   └─ courier/
 │       ├─ openDeliveryOrderUseCase.js
 │       └─ set-courier-online.js
```

### Observação importante

A pasta `services/` atualmente contém **use-cases**, ou seja:

- regras de negócio

- fluxos de decisão

- operações centrais da aplicação

Ela pode futuramente ser renomeada para:

- `use-cases/`

- ou `domain/`

Sem impacto técnico imediato.

---

## 🔄 Fluxo Conceitual da Aplicação

### 1️⃣ Origem do Pedido

Um pedido de entrega pode nascer de:

- SaaS externo (ex: Rangooo)

- Estabelecimento direto (farmácia, loja)

- Futuramente: API pública / manual

O Chegô **não depende da origem**, apenas registra:

- onde retirar

- onde entregar

- valor

- observações

### 2️⃣ Ciclo de Vida de um Pedido de Entrega

Status base do pedido:

- `OPEN` → disponível para entregadores

- `ACCEPTED` → aceito por um entregador

- `DELIVERED` → finalizado com sucesso

- (futuro) `CANCELLED`, `EXPIRED`, etc.

### 3️⃣ Papel do Entregador (Courier)

- Deve estar **logado**

- Pode ficar **online/offline**

- Pode aceitar **vários pedidos simultaneamente**

- Pode **recusar** pedidos (que voltam para `OPEN`)

## 🧩 Use-cases Implementados até Agora

### ✅ `openDeliveryOrderUseCase`

Responsável por:

- criar um pedido de entrega

- validar dados mínimos

- definir status inicial (OPEN)

- registrar origem do pedido

Esse use-case não conhece UI, HTTP ou framework.

### ✅ `setCourierOnline`

Responsável por:

- alterar o estado de disponibilidade do entregador

- permitir ou bloquear recebimento de pedidos

## 🔐 Conceitos-Chave do Domínio

### Delivery Order

Representa **apenas a entrega**, não a venda.

Campos conceituais:

- origem (`source`)

- status

- pickup / dropoff

- valor

- observações

### Courier

Representa o entregador:

- estado online/offline

- vínculo com pedidos aceitos

- histórico de entregas

## 🧭 Direção Futura (Próximos Estágios)

### Stage 1 — Fluxo Básico

- aceitar pedido

- recusar pedido

- finalizar entrega

### Stage 2 — Experiência do Entregador

- listagem de pedidos OPEN

- pedidos ativos do courier

- histórico

### Stage 3 — Escala

- cálculo de distância

- taxa dinâmica

- prioridade de pedidos

- integração com GPS (mobile)

## 🧠 Decisão Arquitetural Importante

O Chegô foi desenhado para que:

- UI possa mudar

- origem do pedido possa mudar

- framework possa mudar

Sem reescrever:

- regras

- fluxo

- contratos

## 📌 Observação Final

O Chegô não é um app de telas.
É **um motor de decisões de entrega**.

A UI apenas **conversa com esse motor**.
