/*
  Warnings:

  - You are about to drop the column `imageURL` on the `Barbershop` table. All the data in the column will be lost.
  - Added the required column `imageUrl` to the `Barbershop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Barbershop" DROP COLUMN "imageURL",
ADD COLUMN     "imageUrl" TEXT NOT NULL;
