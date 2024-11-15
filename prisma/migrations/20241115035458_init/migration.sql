/*
  Warnings:

  - You are about to drop the column `level` on the `questions` table. All the data in the column will be lost.
  - The primary key for the `sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `question` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectionId` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_level_chapterId_fkey";

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "level",
ADD COLUMN     "question" TEXT NOT NULL,
ADD COLUMN     "sectionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sections" DROP CONSTRAINT "sections_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
