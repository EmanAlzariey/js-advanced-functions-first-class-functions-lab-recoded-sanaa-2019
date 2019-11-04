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

//console.log(returnFirstTwoDrivers()(array));

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
function fareDoubler(int1) { //accepts one argument
    const x = function (fare1) {
        return (createFareMultiplier(int1)(fare1)) * 2;
    }

    return x;
}

//test it
// console.log(fareDoubler(7)(6));

//6---------fare tripler
function fareTripler(int1) { //accepts one argument
    const x = function (fare1) {
        return (createFareMultiplier(int1)(fare1) * 3);
    }

    return x;
}
//test it
// console.log(fareTripler(2)(30));

//7--------select Different Drivers
function selectDifferentDrivers(array, RD) {

    // console.log(array);
    // console.log(RD.toString());
    // console.log(returnFirstTwoDrivers().toString());

    if (RD.toString() === returnLastTwoDrivers().toString()) {
        // console.log("last two");
        // console.log(returnLastTwoDrivers()(array));
        return returnLastTwoDrivers()(array)
    }

    if (RD.toString() === returnFirstTwoDrivers().toString()) {
        // console.log("first two");
        // console.log(returnFirstTwoDrivers()(array));
        return returnFirstTwoDrivers()(array)
    }
}

// test it
// newArray = [0, 2, 99, 4, 6, 333]
// console.log(selectDifferentDrivers(newArray, returnFirstTwoDrivers()));
