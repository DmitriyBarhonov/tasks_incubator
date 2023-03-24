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

function multiply(a, b) {
  return a * b
}
//  4

function repeatStr(n, s) {
  let result = ""
  for (let i = 0; i < n; i++) {
    result = result + s
  }
  return result
}

const summation = (num) => {
  let result = 0
  if (num >= 1) {
    for (let i = 0; i <= num; i++) {
      result += i
    }
  }
  return result
}

function noSpace(x) {
  return x.replace(/ /g, '')
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = Infinity
    for (let i = 0; i < args.length; i++) {
      if (args[i] < min) {
        min = args[i]
      }
    }
    return min
  }
}


function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    if (a[i] === x) {
      return true
    }
  }
  return false
}

// let a = [1,2,3,4,5]
function findAverage(arr) {
  let result = 0
  let i
  if (!arr.length) {
    return 0
  }
  for (i = 0; i < arr.length; i++) {
    result = result + arr[i]
  }
  return result / i
}

function simpleMultiplication(num) {
  if(num%2 === 0){
   return num * 8
  }else{
    return num * 9
  }
}

function grow(x){
  let result = 1
   for (let i = 0; i < x.length; i++){
     result = result * x[i]
   }
   return result
 }

 const reverseSeq = n => {
  let a = []
   while (n){
     a.push(n)
     n--
   }
  return a
};

function makeUpperCase(str) {
  return str.toUpperCase ()
 }