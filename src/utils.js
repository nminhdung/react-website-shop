export const usePaginate = (foods) => {
  const itemPerPage = 10;
  const numberOfPages = Math.ceil(foods.length / itemPerPage);
  const newFoods = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemPerPage;
    return foods.slice(start, start + itemPerPage);
  });
  return newFoods;
};
