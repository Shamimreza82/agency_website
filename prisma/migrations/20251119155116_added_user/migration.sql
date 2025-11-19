-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verifyExpire" TIMESTAMP(3),
ADD COLUMN     "verifyToken" TEXT,
ALTER COLUMN "role" SET DEFAULT 'CLIENT';
