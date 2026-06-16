/*
  Warnings:

  - You are about to alter the column `contact_level` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(5))`.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `contact_level` ENUM('UNDER_GRADUATION', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NULL;
