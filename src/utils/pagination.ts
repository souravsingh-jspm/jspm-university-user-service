export const getPagination = (
  page: number,
  limit: number,
  totalRecords: number,
) => {
  const totalPages = Math.ceil(totalRecords / limit);

  return {
    page,
    limit,
    totalRecords,
    totalPages,
    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
};
