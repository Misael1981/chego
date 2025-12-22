# 🛣️ ROADMAP — Chegô

Plataforma de entregas sob demanda, independente do Rangooo

🎯 VISÃO DO PRODUTO

### Criar uma plataforma simples e local de entregas, onde:

- Qualquer loja pode solicitar entregas

- Motoboys escolhem corridas disponíveis

- Rangooo é apenas um dos clientes integrados

- O foco inicial é cidade pequena/média

## 🧱 FASE 0 — FUNDAMENTOS (DECISÕES IRREVERSÍVEIS)

### 📌 Status: agora

- Nome definido: Chegô

- Produto independente do Rangooo

- PWA como plataforma inicial

- Backend próprio

- Mesmo PostgreSQL do Rangooo (schemas separados)

### Decisões técnicas:

- PostgreSQL

- Schema próprio: chego

- Auth próprio

- API própria

- Rangooo consome **Chegô** via API

```
👉 Nada daqui deve ser refeito depois.
```

## 🗄️ FASE 1 — MODELAGEM DO CORE (BANCO & DOMÍNIO)

📌 **Objetivo**: o sistema existir conceitualmente

### Entidades mínimas:

- Store (loja/farmácia/restaurante)

- Courier (motoboy)

- DeliveryOrder (pedido de entrega)

- Delivery (vínculo pedido ↔ motoboy)

### Status do pedido:

- `AVAILABLE`

- `ACCEPTED`

- `IN_DELIVERY`

- `DELIVERED`

- `CANCELED`

### 📌 Regra de ouro:

Chegô não sabe o que é pizza, remédio ou lanche.
Ele só sabe que algo precisa ser entregue.

## 🔐 FASE 2 — AUTENTICAÇÃO & ROLES

📌 **Objetivo**: controle mínimo e seguro

### Roles iniciais:

- `ADMIN` (você)

- `STORE` (loja/farmácia)

- `COURIER` (motoboy)

### Escopo:

- Motoboy só vê pedidos disponíveis

- Loja só vê seus próprios pedidos

- Admin vê tudo

📌 Nada de permissões complexas agora.

## 🌐 FASE 3 — API DO CHEGÔ (MVP)

📌 **Objetivo**: tudo funcionar sem frontend bonito

### Endpoints essenciais:

- Criar pedido de entrega

- Listar pedidos disponíveis

- Aceitar pedido

- Atualizar status

- Listar entregas do motoboy

### Integração Rangooo:

- Endpoint público autenticado

- Recebe pedido externo

- Salva como externalOrderId

📌 **Rangooo** = cliente externo privilegiado

## 📱 FASE 4 — PWA DO MOTOBOY (PRIMEIRO USO REAL)

📌 **Objetivo**: validar se o modelo funciona

### Tela 1 — Login

- Simples

- Persistente

### Tela 2 — Pedidos disponíveis

- Loja

- Bairro

- Valor da entrega

- Botão Aceitar

### Tela 3 — Pedido em andamento

- Status

- Botão **Finalizar entrega**

📌 Sem mapa
📌 Sem chat
📌 Sem GPS
📌 Só o essencial

## 🏪 FASE 5 — PAINEL DA LOJA (SIMPLÃO)

📌 **Objetivo**: permitir uso sem Rangooo

- Criar pedido manual

- Definir valor da entrega

- Acompanhar status

- Ver motoboy atribuído

📌 UI simples > UI bonita

## 🔌 FASE 6 — INTEGRAÇÃO COM RANGOOO

📌 **Objetivo**: sinergia sem dependência

- Rangooo dispara pedido

- Chegô gerencia entrega

- Status pode voltar pro Rangooo (webhook ou polling)

📌 Se o Chegô cair, Rangooo continua funcionando.

## 🧪 FASE 7 — VALIDAÇÃO LOCAL (CONGONHAL)

📌 **Objetivo**: provar valor no mundo real

- 1 a 3 lojas

- 3 a 5 motoboys

- Operação manual assistida

- Feedback direto

### Perguntas-chave:

- Motoboy aceita?

- Loja confia?

- Valor faz sentido?

## 💰 FASE 8 — MONETIZAÇÃO (SÓ DEPOIS)

📌 **Objetivo**: sustentar o produto

- Possibilidades:

- Valor fixo por entrega

- Plano mensal pra lojas

- Sem comissão sobre venda

📌 Nunca cobrar antes de provar uso.

## 🚀 FASE 9 — EVOLUÇÃO (FUTURO)

### Somente após validação:

- Push notifications

- Histórico e relatórios

- Mapa e rota

- App nativo

- Expansão regional
