const fizzbuzz = (array) => {
  let result = "";

  array.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      result = "Fizzbuzz";
    } else if (number % 3 === 0) {
      result = "Fizz";
    } else if (number % 5 === 0) {
      number = "Buzz";
    } else {
      result = number;
    }
    console.log(result);
  });
};

fizzbuzz([1, 2, 5, 7, 8, 6, 15, 45, 24]);

const divisble = (number, division) => {
  return number % division === 0;
};
