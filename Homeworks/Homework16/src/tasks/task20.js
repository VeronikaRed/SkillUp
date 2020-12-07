export function twentyTask(arr){
    result = 0;
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr[i].length; j++) {
           result += arr[i][j];
       }
   }
   console.log(result);   
   }