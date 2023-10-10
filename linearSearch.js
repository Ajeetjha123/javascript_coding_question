// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
const search = (arr, key) => {
    let index = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key) {
            index = i;
            break;
        }
    }
    return index;
}
const arr = [1, 2, 3, 4, 5];
const ans = search(arr, 4);
console.log(ans)