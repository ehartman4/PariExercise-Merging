function split(array) {
    console.log("GIVEN ARRAY: ", array)

    if (array.length === 0) {
        return array
    }

    let result = [array.slice(0, (array.length / 2)), array.slice(array.length / 2)]

    console.log("RESULT: ", result)

    return result
}
