-- CreateEnum
CREATE TYPE "VehicleType" AS ENUM ('MOTO', 'BIKE', 'CARRO');

-- CreateEnum
CREATE TYPE "WeekDay" AS ENUM ('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY');

-- CreateEnum
CREATE TYPE "DayPeriod" AS ENUM ('MORNING', 'AFTERNOON', 'NIGHT');

-- DropForeignKey
ALTER TABLE "Courier" DROP CONSTRAINT "Courier_userId_fkey";

-- DropForeignKey
ALTER TABLE "Merchant" DROP CONSTRAINT "Merchant_userId_fkey";

-- AlterTable
ALTER TABLE "Courier" ADD COLUMN     "hasFixedJob" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "CourierAvailability" (
    "id" TEXT NOT NULL,
    "courierId" TEXT NOT NULL,
    "day" "WeekDay" NOT NULL,
    "period" "DayPeriod" NOT NULL,

    CONSTRAINT "CourierAvailability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourierProfile" (
    "id" TEXT NOT NULL,
    "courierId" TEXT NOT NULL,
    "expectations" TEXT,

    CONSTRAINT "CourierProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourierVehicle" (
    "id" TEXT NOT NULL,
    "courierId" TEXT NOT NULL,
    "type" "VehicleType" NOT NULL,
    "plate" TEXT,
    "model" TEXT,
    "engineCc" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CourierVehicle_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourierProfile_courierId_key" ON "CourierProfile"("courierId");

-- CreateIndex
CREATE UNIQUE INDEX "CourierVehicle_courierId_key" ON "CourierVehicle"("courierId");

-- AddForeignKey
ALTER TABLE "Courier" ADD CONSTRAINT "Courier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourierAvailability" ADD CONSTRAINT "CourierAvailability_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourierProfile" ADD CONSTRAINT "CourierProfile_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourierVehicle" ADD CONSTRAINT "CourierVehicle_courierId_fkey" FOREIGN KEY ("courierId") REFERENCES "Courier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Merchant" ADD CONSTRAINT "Merchant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
