describe('Split function', function () {
    it('returns an empty array when input is empty', function () {
        expect(split([])).toEqual([])
    });

    it('is able to split an even array into two halves', function () {
        expect(split([2, 5, 6, 9, 8, 3])).toEqual([[2, 5, 6],[9, 8, 3]])
    });

    it('is able to split an odd array into two halves', function () {
        expect(split([2, 5, 6, 9, 8, 3, 7])).toEqual([[2, 5, 6],[9, 8, 3, 7]])
    });
});

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
      // test the merging algorithm
    });
  });