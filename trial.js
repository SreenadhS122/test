const arr = [3,5,6,2];
let temp,size = arr.length-1;
for(let i=size;i>=2;i--){
  temp = arr[i];
  arr[i] = arr[i+1];
  arr[i+1] = temp;
};
arr[2] = 0; 
console.log(arr);