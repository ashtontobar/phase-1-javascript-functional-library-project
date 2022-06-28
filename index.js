function myEach(collection, callback) {
    //iterates over the collection
    //passes each element to the callback
    //returns the original, unmodified, collection
    const createArray = Object.entries(collection)

    const copyArray = Object.assign(callback, ...createArray)

}

//Function Calls
myEach([1, 2, 3], alert);

myEach({one: 1, two: 2, three: 3}, alert);
