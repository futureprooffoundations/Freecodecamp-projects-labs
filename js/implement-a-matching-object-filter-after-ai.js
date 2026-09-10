function whatIsInAName(arr, obj) {
  return arr.filter((ob) =>
    Object.entries(obj).every(([key, value]) => ob[key] === value)
  );
}