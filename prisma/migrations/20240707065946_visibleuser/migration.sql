/*
  Warnings:

  - You are about to drop the column `content` on the `Diary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Diary" DROP COLUMN "content",
ALTER COLUMN "isPrivate" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "visible" BOOLEAN NOT NULL DEFAULT false;
