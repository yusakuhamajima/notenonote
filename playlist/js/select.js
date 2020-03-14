var nowYear = new Date().getFullYear();

// 週番号計算
function dateToIso8601Week(date) {
  const thursday = new Date(
    Math.ceil((date.getTime() - 259200000) / 604800000) * 604800000
  );
  const firstDayOfYear = new Date(thursday.getFullYear(), 0, 1);
  const weekOfYear = Math.floor(
    (thursday.getTime() - firstDayOfYear.getTime()) / 604800000
  );
  return weekOfYear;
}

var weekno = dateToIso8601Week(new Date());
