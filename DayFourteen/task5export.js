//Create a module that exports multiple constants and functions.
//Import the entire module as an object in another script and use its properties.

export const PI = 3.14;
export function area (r){
    return PI*r*r;
}