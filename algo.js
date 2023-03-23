function makeNegative(num) {
  if (num <= 0) {
    return num
  } else {
    return num - num * 2
  }
}


function solution(str) {
  return [...str].reverse().join('')
}

const boolToWord = (bool) => bool ? "Yes" : "No"


function numberToString(num) {
  return num.toString()
}

function opposite(number) {
  if (number < 0) {
    return number - (number * 2)
  } else if (number === 0) {
    return number
  } else {
    return number - (number * 2)
  }
}



function removeChar(str) {
  if (str.length > 2) { 
    return str.slice(1, str.length - 1)
  } else {
    return ''
  }
};

function multiply(a, b){
  return a * b
}
// 3

function repeatStr (n, s) {
  let result = ""
  for(let i = 0; i < n; i++){
    result = result+s
}
  return result
}