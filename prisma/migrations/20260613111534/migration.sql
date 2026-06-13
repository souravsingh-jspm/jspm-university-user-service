-- AlterTable
ALTER TABLE `blogs` ADD COLUMN `blog_order` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `events` ADD COLUMN `event_order` INTEGER NOT NULL DEFAULT 0;
