-- AlterTable
ALTER TABLE "Diary" ADD COLUMN     "category" TEXT NOT NULL DEFAULT 'general',
ADD COLUMN     "description" TEXT NOT NULL DEFAULT 'no description';
