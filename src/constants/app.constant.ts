export const PORT = 3001;

export const API_ENDPOINTS = {
  BASE: "/user",
  SCHOOL: "/school",
  SCHOOL_BY_ID: "/school/:id",
  SCHOOLS: "/schools",

  CMS_PAGE: "/page",
  CMS_PAGE_BY_ID: "/page/:id",
  CMS_PAGES: "/pages",
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
};

export const API_ERRORS = {
  DATABASE_ERROR: "Database Error!",
  USER_SERVICE_ERROR: "Unexpected error while calling user service",
  // School
  SCHOOL_SLUG_NAME_ERROR: "School already exists with same name & slug",
  SlUG_ERROR: "School already exists with same slug",
  NAME_ERROR: "School already exists with same name",
  INVAID_SCHOOL_ID: "Provide vaild school Id",
  // Pages
  PAGE_SLUG_ERROR: "Page already exits with same slug",
  PAGE_NOT_EXITS: "Page dose not exists",

  SEND_PROPER_JSON: "Send a proper JSON data",
};
