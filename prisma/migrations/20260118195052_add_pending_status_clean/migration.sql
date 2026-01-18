/*
  Warnings:

  - Added the required column `city` to the `Courier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Courier` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "BrazilianState" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- AlterEnum
ALTER TYPE "CourierStatus" ADD VALUE 'PENDING';

-- AlterTable
ALTER TABLE "Courier" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" "BrazilianState" NOT NULL;

-- CreateIndex
CREATE INDEX "Courier_city_state_idx" ON "Courier"("city", "state");
