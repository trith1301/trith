/*
  Warnings:

  - You are about to drop the column `create_date` on the `Experience` table. All the data in the column will be lost.
  - You are about to drop the column `create_date` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `update_date` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Experience` DROP COLUMN `create_date`,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `Project` DROP COLUMN `create_date`,
    DROP COLUMN `update_date`,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3);
