/*
  Warnings:

  - The values [UNDER_GRADUATION] on the enum `contact_contact_level` will be removed. If these variants are still used in the database, this will fail.
  - The values [UNDER_GRADUATION] on the enum `contact_contact_level` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `contact_level` ENUM('UNDER_GRADUATE', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NULL;

-- AlterTable
ALTER TABLE `programs` MODIFY `program_select_type` ENUM('UNDER_GRADUATE', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NOT NULL;
