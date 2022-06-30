const data = ["1", "2", "3", "4", "5"];

//Data numbers array type is string.
data.forEach(val => console.log(typeof val));

//Convert data numbers type string to numbers.
const convertedToNumbers = data.map(numbers => Number(numbers));

//Now it's data type is number.
convertedToNumbers.forEach(val => console.log(typeof val));
