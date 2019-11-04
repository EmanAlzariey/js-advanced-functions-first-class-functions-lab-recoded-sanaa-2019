// Code your solution in this file!
// Code your solution in this file!
console.log("Hello!");

//1------first 2 drivers in array
function returnFirstTwoDrivers(array) {

    let  y =[]
      y =[array[0],array[1]]
    return y;
}
//test it
//array = [1, 2, 3, 4, 5, 6];
// returnFirstTwoDrivers(array)

//console.log(returnFirstTwoDrivers(array));

//2-------last two drivers in the array
function returnLastTwoDrivers(array) {
 let y = []
        y = [array[array.length - 2], array[array.length - 1]];
        return y
}

//test it
//array = [1, 2, 3, 4, 5, 6];
// returnLastTwoDrivers(array)


//3-------selecting Drivers
let selectingDrivers = [ returnFirstTwoDrivers , returnLastTwoDrivers]

// test it
// console.log(selectingDrivers);

//4-------fare multiplier
function createFareMultiplier(int) {
    return function (fare) { return int * fare }
}

//test it
// console.log(createFareMultiplier(4)(250));

//5--------fare Doubler
function fareDoubler(fare1) { //accepts one argument
    const x = createFareMultiplier(2);

    return x(fare1);
}

//test it
// console.log(fareDoubler(6));

//6---------fare tripler
function fareTripler(fare1) { //accepts one argument
  const x = createFareMultiplier(3);

  return x(fare1);

}
//test it
// console.log(fareTripler(2));

//7--------select Different Drivers
function selectDifferentDrivers(array, RD) {

       return RD(array);

}

// test it
// newArray = [0, 2, 99, 4, 6, 333]
// console.log(selectDifferentDrivers(newArray, returnFirstTwoDrivers()));
