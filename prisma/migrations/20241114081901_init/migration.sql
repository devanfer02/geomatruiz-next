/*
  Warnings:

  - You are about to drop the column `sectionId` on the `questions` table. All the data in the column will be lost.
  - The primary key for the `sections` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `order` to the `chapters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chapterId` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `level` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "questions" DROP CONSTRAINT "questions_sectionId_fkey";

-- AlterTable
ALTER TABLE "chapters" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "questions" DROP COLUMN "sectionId",
ADD COLUMN     "chapterId" UUID NOT NULL,
ADD COLUMN     "level" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "sections" DROP CONSTRAINT "sections_pkey",
ADD CONSTRAINT "sections_pkey" PRIMARY KEY ("level", "chapterId");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_level_chapterId_fkey" FOREIGN KEY ("level", "chapterId") REFERENCES "sections"("level", "chapterId") ON DELETE RESTRICT ON UPDATE CASCADE;
