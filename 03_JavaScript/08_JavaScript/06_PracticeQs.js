// Practice Qs
// Check if all numbers in our array are multiples of 10 or not.
// Create a function to find the min number in an array.


let arr = [10, 20, 30, 40, 50];

let ans = arr.every( (el) => {
    return (el % 10 == 0);
});
console.log(ans);  // true




function getMinimum(arr2){
    let min = arr2.reduce( (min, el) => {
        if (el < min){
            return el
        } else {
            return min
        }
    });
    
    return min;
}

let arr2 = [34, 12, 5, 67, 23, 89, 2];

console.log(getMinimum(arr2));  // 2
