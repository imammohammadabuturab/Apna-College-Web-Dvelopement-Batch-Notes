// Reduce
// Reduces the array to a single value
// arr.reduce(reducer function with 2 variables for (accumulator, element));

let nums = [1, 2, 3, 4];
let finalValue = nums.reduce( (res, el) => {
    console.log('res:', res, 'el:', el);
    return res+el;
} );  //10
console.log('finalValue:', finalValue);

// Without initial value, the first call will have res=first element, el=second element
// With initial value, the first call will have res=initial value, el=first element

[1, 2, 3, 4].reduce( (res, el) => (res*el) );  //24

[1, 2, 3, 4].reduce( (res, el) => (res+el), 10 );  //20

