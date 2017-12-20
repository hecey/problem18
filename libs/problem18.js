module.exports = {
   sumMaxPath(arr){
    var index=0;
    var i;
    var sum=0;
    const arrayLength=arr.length;

    for(i=0; i < arrayLength; i++){
          index = (arr[i][index+1]>arr[i][index]) ? index+1 : index ;
          sum+=arr[i][index];
    }
    return sum;
  }


};
