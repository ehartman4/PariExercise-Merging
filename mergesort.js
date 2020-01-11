function split(array) {
    if (array.length === 0 || array.length === 1) {
        return array
    }

    return [array.slice(0, (array.length / 2)), array.slice(array.length / 2)]
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

// function merge(array1, array2) {
//   let result = []

//   let iter1 = 0;
//   let iter2 = 0;
//   while (iter1 < array1.length && iter2 < array2.length) {
//     if (array1[iter1] < array2[iter2]) {
//       result.push(array1[iter1])
//       iter1++
//     } else {
//       result.push(array2[iter2])
//       iter2++
//     }
//   }

//   if (array1.length === iter1) {
//     result.push(...array2.slice(iter2))
//   } else {
//     result.push(...array1.slice(iter1))
//   }

//   return result
// }

function merge(array1, array2, comparator = defaultComparator) {
    let result = []

    let iter1 = 0;
    let iter2 = 0;
    while (iter1 < array1.length && iter2 < array2.length) {
      if (comparator(array1[iter1], array2[iter2]) === -1) {
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

function mergeSort(array, comparator = defaultComparator) {
    let splitArray = split(array)

    if (splitArray.length === 2) {
        let merge1 = mergeSort(splitArray[0], comparator)
        let merge2 = mergeSort(splitArray[1], comparator)
        let mergedArray = merge(merge1, merge2, comparator)
        return mergedArray
    } else {
        return splitArray
    }
}

function defaultComparator(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
