arr=[10,20,30,40,50];
i=0;
for(value of arr){
value=value/10;
arr[i]-=value;
    i++;
}
console.log(arr);