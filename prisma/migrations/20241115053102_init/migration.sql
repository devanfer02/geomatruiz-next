/*
  Warnings:

  - You are about to drop the column `chapterId` on the `questions` table. All the data in the column will be lost.
  - You are about to drop the column `rightOption` on the `questions` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[rightOptionId]` on the table `questions` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imageLink` to the `questions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rightOptionId` to the `questions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "questions" DROP COLUMN "chapterId",
DROP COLUMN "rightOption",
ADD COLUMN     "imageLink" TEXT NOT NULL,
ADD COLUMN     "rightOptionId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "questions_rightOptionId_key" ON "questions"("rightOptionId");

-- AddForeignKey
ALTER TABLE "questions" ADD CONSTRAINT "questions_rightOptionId_fkey" FOREIGN KEY ("rightOptionId") REFERENCES "options"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
