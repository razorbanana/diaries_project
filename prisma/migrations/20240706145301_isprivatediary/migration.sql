/*
  Warnings:

  - Added the required column `isPrivate` to the `Diary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Diary" ADD COLUMN     "isPrivate" BOOLEAN NOT NULL;
