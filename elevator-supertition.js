function elevatorSupertition(input) {
  let luckyArray = [];
  let tempInput = input;
  for(let j  = 1 ; j<=tempInput ; j++) {
    luckyArray.push(j);
    if(j.toString().indexOf('4') > -1 || j.toString().indexOf('13') > -1 ) {
      luckyArray.pop();
      tempInput ++;
    }
  }
  console.log(luckyArray[input-1]);
}

elevatorSupertition(12);
