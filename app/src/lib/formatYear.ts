export const formatYear = (
  yearFrom: number | string,
  yearTo?: number | string,
): string => {
  return `${yearFrom}${yearFrom !== yearTo ? ` - ${yearTo ?? 'Current'}` : ''}`
}
