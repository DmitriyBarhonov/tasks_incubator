function makeNegative(num) {
  if(num <= 0){
    return num
  }else{
    return num  - num * 2
  }
}


function solution(str){
  return [...str].reverse().join('')
}

const boolToWord = ( bool ) => bool ? "Yes" : "No"
