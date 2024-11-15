-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_rightOptionId_fkey";

-- AlterTable
ALTER TABLE "questions" ALTER COLUMN "rightOptionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_rightOptionId_fkey" FOREIGN KEY ("rightOptionId") REFERENCES "options"("id") ON DELETE SET NULL ON UPDATE CASCADE;
