/*
  Warnings:

  - You are about to drop the `SavedMovie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavedMovie" DROP CONSTRAINT "SavedMovie_userEmail_fkey";

-- DropTable
DROP TABLE "SavedMovie";

-- CreateTable
CREATE TABLE "WatchList" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "movieTitles" TEXT[],
    "userEmail" TEXT NOT NULL,

    CONSTRAINT "WatchList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WatchList" ADD CONSTRAINT "WatchList_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
