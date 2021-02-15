let result = process.argv
  .slice(2)
  .reduce((total, current) => parseInt(total) + parseInt(current), 0);
console.log(result);
