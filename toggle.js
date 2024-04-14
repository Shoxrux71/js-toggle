let result = document.querySelector(".result");

// let month = [1,2,3,4,5,6,7,8,9,]
// let sort = month.toReversed();
// result.innerHTML = sort;
// let sortValue = month.toSorted((a,b)=> a -b);

// result.innerHTML = sortValue;
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

result.innerHTML = array.some(even);
// Expected output: true