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
//  4

function repeatStr (n, s) {
  let result = ""
  for(let i = 0; i < n; i++){
    result = result+s
}
  return result
}

const  summation = (num)=> {
  let result = 0
    if(num >= 1){
      for(let i = 0; i <= num; i++){
      result += i
    }
    }
  return result
}

function noSpace(x){
  return x.replace(/ /g,'')
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Infinity
    for(let i = 0; i < args.length; i++){
      if (args[i] < min){
        min = args[i]
      }
    }
  return min
  }
}

let a = [1,2,3,4,5,6,7]

function check(a, x) {
  for(let i = 0; i < a.length; i++){
    console.log(a[i])
    if(a[i] === x){
      return true
    } 
  }
  return false
}

console.log(check(a,34))