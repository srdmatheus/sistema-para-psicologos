-- CreateEnum
CREATE TYPE "ConsultationStatus" AS ENUM ('SCHEDULED', 'CONCLUDED', 'CANCELED');

-- AlterTable
ALTER TABLE "consultations" ADD COLUMN     "status" "ConsultationStatus" NOT NULL DEFAULT 'SCHEDULED';
