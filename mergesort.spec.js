describe('Split function', function () {
    it('returns an empty array when input is empty', function () {
        expect(split([])).toEqual([])
    });

    it('returns the array when input is one element', function () {
        expect(split([2])).toEqual([2])
    });


    it('is able to split an even array into two halves', function () {
        expect(split([2, 5, 6, 9, 8, 3])).toEqual([[2, 5, 6], [9, 8, 3]])
    });

    it('is able to split an odd array into two halves', function () {
        expect(split([2, 5, 6, 9, 8, 3, 7])).toEqual([[2, 5, 6], [9, 8, 3, 7]])
    });
});

describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
        expect(merge([2, 5, 6], [3, 8, 9])).toEqual([2, 3, 5, 6, 8, 9])
    });
    it('is able to merge two other sorted arrays into one sorted array', function () {
        expect(merge([3, 8, 9], [2, 5, 6])).toEqual([2, 3, 5, 6, 8, 9])
    });
});


describe('MergeSort function', function () {
    it('returns an empty array when input is empty', function () {
        expect(mergeSort([])).toEqual([])
    });

    it('returns the array if one element', function () {
        expect(mergeSort([6])).toEqual([6])
    });
    
    it('is able to sort an even array', function () {
        expect(mergeSort([6, 5, 2, 9, 8, 3])).toEqual([2, 3, 5, 6, 8, 9])
    });

    it('is able to sort an odd array', function () {
        expect(mergeSort([6, 5, 2, 9, 8, 3, 4])).toEqual([2, 3, 4, 5, 6, 8, 9])
    });

    it('is able to sort an odd array', function () {
        expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
    });
});