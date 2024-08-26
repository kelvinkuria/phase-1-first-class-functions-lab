// Code your solution in this file!
const returnFirstTwoDrivers = function (){
    return driver.slice(0,2);
};

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(fare){
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2);

const selectingDifferentDrivers = function(drivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
};