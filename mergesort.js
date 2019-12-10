function split(array) {
    console.log("GIVEN ARRAY: ", array)

    if (array.length === 0) {
        return array
    }

    let result = [array.slice(0, (array.length / 2)), array.slice(array.length / 2)]

    console.log("RESULT: ", result)

    return result
}

// function merge(array1,array2) {
//   let result = []

//   while (array1.length > 0 && array2.length > 0) {
//     if (array1[0] < array2[0]) {
//       result.push(array1[0])
//       array1 = array1.slice(1)
//     } else {
//       result.push(array2[0])
//       array2 = array2.slice(1)
//     }
//   }

//   if (array1.length === 0) {
//     result.push(...array2)
//   } else {
//     result.push(...array1)
//   }

//   return result
// }

function merge(array1,array2) {
  let result = []

  let iter1 = 0;
  let iter2 = 0;
  while (iter1 < array1.length && iter2 < array2.length) {
    if (array1[iter1] < array2[iter2]) {
      result.push(array1[iter1])
      iter1++
    } else {
      result.push(array2[iter2])
      iter2++
    }
  }

  if (array1.length === iter1) {
    result.push(...array2.slice(iter2))
  } else {
    result.push(...array1.slice(iter1))
  }

  return result
}
