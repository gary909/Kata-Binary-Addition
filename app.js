function addBinary(a, b) {
    let myAns = a + b;
    // return (myAns >>> 0).toString(2)
    return myAns.toString(2)
}

console.log(addBinary(1, 2)); //