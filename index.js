// Define receivesAFunction
function receivesAFunction(callback) {
    callback();
}

// Define returnsANamedFunction
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function");
    };
}

// Define returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");
    };
}
