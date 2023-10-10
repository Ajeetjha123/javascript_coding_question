const reverse = (arr, i, n) => {
   while(i <= n){
    let temp = arr[i];
        arr[i] = arr[n];
        arr[n] = temp;
        i++;
        n--;
   }
}
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log('after reverse');
reverse(arr, 0, arr.length-1);
console.log(arr);