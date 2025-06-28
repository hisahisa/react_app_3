/**
 * ソート処理
 * @param {Array} data - ソートするデータ（配列）
 * @param {String} sortField - ソートするキー
 * @param {String} sortOrder - ソート方向 ("asc" or "desc")
 * @returns {Array} ソート済みのデータ
 */
export const sortRows = (data, sortField, sortOrder) => {
  return [...data].sort((a, b) => {
    if (a[sortField] === b[sortField]) return 0;
    return (a[sortField] < b[sortField] ? -1 : 1) * (sortOrder === "asc" ? 1 : -1);
  });
};
