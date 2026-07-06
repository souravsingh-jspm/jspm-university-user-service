-- AlterTable
ALTER TABLE `blogs` MODIFY `blog_image1_file_id` TEXT NULL,
    MODIFY `blog_image2_file_id` TEXT NULL;

-- AlterTable
ALTER TABLE `events` MODIFY `event_image1_file_id` TEXT NULL,
    MODIFY `event_image2_file_id` TEXT NULL;

-- AlterTable
ALTER TABLE `news` MODIFY `news_image1_file_id` TEXT NULL,
    MODIFY `news_image2_file_id` TEXT NULL;
