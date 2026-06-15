-- AlterTable
ALTER TABLE `faculties` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `schools` ADD COLUMN `school_faculty_id` VARCHAR(191) NULL,
    ADD COLUMN `school_file_id` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `schools` ADD CONSTRAINT `schools_school_faculty_id_fkey` FOREIGN KEY (`school_faculty_id`) REFERENCES `faculties`(`faculty_id`) ON DELETE SET NULL ON UPDATE CASCADE;
