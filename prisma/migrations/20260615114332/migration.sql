/*
  Warnings:

  - The values [UNDER_GRADUATION_PROGRAMS] on the enum `programs_program_select_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `programs` MODIFY `program_select_type` ENUM('UNDER_GRADUATION', 'POST_GRADUATE', 'INTEGRATED', 'POST_DIPLOMA', 'POST_GRADUATE_DIPLOMA', 'CERTIFICATE') NOT NULL;
