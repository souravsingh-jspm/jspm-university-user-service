export const PORT = 3001;

export const API_ENDPOINTS = {
  BASE: "/user",
  SCHOOL: "/school",
  SCHOOL_BY_ID: "/school/:id",
  SCHOOLS: "/schools",

  CMS_PAGE: "/page",
  CMS_PAGE_BY_ID: "/page/:id",
  CMS_PAGES: "/pages",
  CMS_HOME_PAGES: "/home-pages",
  CMS_SCHOOL_PAGES: "/school-pages/:id",

  PAGE_CONTENT: "/page-content",
  PAGE_CONTENT_BY_ID: "/page-content/:id",
  PAGE_CONTENTS: "/page-contents",
  PAGE_CONTENT_BY_PAGE_ID: "/page-content-by-page/:id",
  PAGE_CONTENT_BY_CMS_ID: "/page-contents-id/:id",

  EVENT: "/event",
  EVENT_BY_ID: "/event/:id",
  EVENTS: "/events",

  BLOG: "/blog",
  BLOG_BY_ID: "/blog/:id",
  BLOGS: "/blogs",

  NEWS: "/news",
  NEWS_BY_ID: "/news/:id",
  ALL_NEWS: "/all-news",

  FACULTY: "/faculty",
  FACULTY_BY_ID: "/faculty/:id",
  FACULTIES: "/faculties",

  CONTACT: "/contact",
  CONTACT_BY_ID: "/contact/:id",
  CONTACTS: "/contacts",

  PROGRAM: "/program",
  PROGRAM_BY_ID: "/program/:id",
  PROGRAMS: "/programs",
};

export const CMS_SECTION = {
  HOME: "HOME",
  SCHOOL: "SCHOOL",
};

export const API_RESPONSES = {
  SCHOOL_CREATE: "School created successfully",
  SCHOOL_DELETE: "School delete successfully",
  SCHOOL_UPDATE: "School updated successfully",
  SCHOOL_FETCHED: "School fetched successfully",
  SCHOOLS_FETCHED: "School's fetched successfully",

  PAGE_CREATED: "Page created successfully",
  PAGE_DELETED: "Page delete successfully",
  PAGE_UPDATED: "Page updated successfully",
  PAGE_FETCHED: "Page fetched successfully",
  PAGES_FETCHED: "Page's fetched successfully",

  PAGE_CONTENT_CREATED: "Page content created successfully",
  PAGE_CONTENT_DELETED: "Page content deleted successfully",
  PAGE_CONTENT_UPDATED: "Page content updated successfully",
  PAGE_CONTENT_FETCHED: "Page content fetched successfully",
  PAGES_CONTENT_FETCHED: "Page contents fetched successfully",

  EVENT_CREATED: "Event created successfully",
  EVENT_DELETED: "Event deleted successfully",
  EVENT_UPDATED: "Event updated successfully",
  EVENT_FETCHED: "Event fetched successfully",
  EVENTS_FETCHED: "Events fetched successfully",

  BLOG_CREATED: "Blog created successfully",
  BLOG_DELETED: "Blog deleted successfully",
  BLOG_UPDATED: "Blog updated successfully",
  BLOG_FETCHED: "Blog fetched successfully",
  BLOGS_FETCHED: "Blogs fetched successfully",

  NEWS_CREATED: "News created successfully",
  NEWS_DELETED: "News deleted successfully",
  NEWS_UPDATED: "News updated successfully",
  NEWS_FETCHED: "News fetched successfully",
  ALL_NEWS_FETCHED: "Newss fetched successfully",

  FACULTY_CREATED: "Faculty created successfully",
  FACULTY_DELETED: "Faculty deleted successfully",
  FACULTY_UPDATED: "Faculty updated successfully",
  FACULTY_FETCHED: "Faculty fetched successfully",
  ALL_FACULTIES_FETCHED: "All Faculties fetched successfully",

  CONTACT_CREATED: "Contact created successfully",
  CONTACT_DELETED: "Contact deleted successfully",
  CONTACT_UPDATED: "Contact updated successfully",
  CONTACT_FETCHED: "Contact fetched successfully",
  ALL_CONTACT_FETCHED: "All contacts fetched successfully",

  PROGRAMS_CREATED: "Program created successfully",
  PROGRAMS_DELETED: "Program deleted successfully",
  PROGRAMS_UPDATED: "Program updated successfully",
  PROGRAMS_FETCHED: "Program fetched successfully",
  ALL_PROGRAMS_FETCHED: "All Programs fetched successfully",

  HOME_PAGE_FETCHED: "Home Page fetched successfully",
  SCHOOL_PAGES_FETCHED: "School Pages fetched successfully",
};

export const API_ERRORS = {
  DATABASE_ERROR: "Database Error!",
  USER_SERVICE_ERROR: "Unexpected error while calling user service",
  // School
  SCHOOL_SLUG_NAME_ERROR: "School already exists with same name & slug",
  SlUG_ERROR: "School already exists with same slug",
  NAME_ERROR: "School already exists with same name",
  MANDATORY_SCHOOL_ID: "School Id is manadatory",
  INVALID_SCHOOL_ID: "Provide vaild school Id",
  //Pages
  PAGE_SLUG_ERROR: "Page already exits with same slug",
  PAGE_NOT_EXITS: "Page dose not exists",
  //Page Content
  PAGE_CONTENT_NOT_FOUND: "Page content block not found",
  //Blog
  BLOG_NOT_FOUND: "Blog not found",
  //Event
  EVENT_NOT_FOUND: "Event not found",
  //News
  NEWS_NOT_FOUND: "News not found",
  //Faculty
  FACULTY_NOT_FOUND: "Faculty not found",
  INVAID_FACULTY_ID: "Provide a valid faculty Id",
  //Programs
  PROGRAM_NOT_FOUND: "Program not found",
  //Contact
  CONTACT_NOT_FOUND: "Contact not found",

  SEND_PROPER_JSON: "Send a proper JSON data",

  YOU_DO_NOT_HAVE_PERMISSION: "You don't have permissions for this action",
};

export const AUTH_SERVICE = "http://localhost:3000/auth/.well-known/jwks.json";

export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
  SUPER_ADMIN: "SUPER_ADMIN",
};

export const STRINGS = {
  SERVER_LISTENING_ON_PORT: "Server is listening on port",
  USER: "user",
  EXIT: "exit",
  SIGINT: "SIGINT",
  SIGUSR1: "SIGUSR1",
  SIGUSR2: "SIGUSR2",
  SIGTERM: "SIGTERM",
  UNCAUGHT_EXCEPTION: "uncaughtException",
  ONE_TIME_PASSWORD: "One time password",
  DOES_NOT_EXIST: "Does not exist",
};
