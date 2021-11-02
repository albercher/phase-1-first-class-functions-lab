// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return function fareMultiplier(fare){
        return fare * int;
    }
}

const fareDoubler = fare => createFareMultiplier(2)(fare);
const fareTripler = fare => createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, funct){
    if (funct === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (funct === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}