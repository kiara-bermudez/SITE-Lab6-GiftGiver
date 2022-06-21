const {BadRequestError} = require("../utils/errors");

class GiftExchange {
    // Takes even array of names and pairs them together to return an array of tuples
    static pairs(names) {
        if (!names) {
            throw new BadRequestError("You need to input a names array");
        }

        let size = names.length;
        let pairedArr = [];

        // Check if number of names provided is odd 
        if (size % 2 == 1) {
            throw new BadRequestError("Number of names must be even");
        }

        // Create copies of number array
        let arr1 = names.map((x) => x);

        // Randomize the array
        // Fisher-Yates algorithm: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
        for (let i = names.length - 1; i>0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }

        // Zip the two arrays together
        // Make sure not to pair two of the same name together
        while (arr1.length > 0) {
            let name1 = arr1.pop();
            let name2 = arr1.pop();
            pairedArr.push([name1,name2]);

        }

        return pairedArr;

    }

    // Takes even array of names 
    static traditional(names) {
        if (!names) {
            throw new BadRequestError("You need to input a names array");
        }

        let size = names.length;

        // Create copies of number array
        let arr1 = names.map((x) => x);

        // Randomize the array
        for (let i = names.length - 1; i>0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let temp = arr1[i];
            arr1[i] = arr1[j];
            arr1[j] = temp;
        }

        let resultArr = [];

        // Match each name to another in sequential order
        for (let k = 0; k < size; k++) {
            let giver = arr1[k];
            let recipient = k == size - 1 ? arr1[0] : arr1[k+1];

            resultArr.push(giver + " is giving a gift to " + recipient);
        }

        return resultArr;

    }
}

module.exports = GiftExchange;