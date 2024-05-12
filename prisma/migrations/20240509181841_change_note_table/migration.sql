/*
  Warnings:

  - You are about to drop the `consultation_notes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "consultation_notes" DROP CONSTRAINT "consultation_notes_consultationId_fkey";

-- DropTable
DROP TABLE "consultation_notes";

-- CreateTable
CREATE TABLE "notes" (
    "id" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notes" ADD CONSTRAINT "notes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
