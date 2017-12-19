var arr = [
[5],
[9, 4],
[9, 3, 5],
[7, 1, 6, 8]
];

while (arr.length !== 1) {
  var len = arr.length;
  var row = [];
  var current = arr[len-2];
  console.log(current);
  var currentLen = current.length - 1;
  console.log(currentLen);
  var end = arr[len-1];
  console.log(end);

  for ( var i = 0; i <= currentLen; i++ ) {
    row.push(Math.max(current[i] + end[i] || 0, current[i] + end[i+1] || 0) )
  }

  arr.pop();
  arr.pop();

  arr.push(row);
}

console.log(arr);
