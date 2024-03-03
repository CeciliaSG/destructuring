/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

/**Allows us to easily turn an array or object into multiple variables. 
 * By separating our variable names with commas.
 * */ 


// Destructuring arrays

let ages = [30, 26, 27];
/* Without destructuring
let john = ages[0];
let mary = ages[1];
let joe = ages[2];

console.log(john, mary, joe);
*/

let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects

let jobs = {
    mike: 'designer',
    jill: 'developer',
    alicia: 'accountatnt'
};

let { mike, jill, alicia } = jobs

console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthlanguage: 'japanese',
}

let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

let fruits = ['apple', 'orange', 'banan', 'peach', 'cherry']
let[favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};

let { brian, anna, ...rest} =favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);


