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
        expect(merge([2, 5, 6], [3, 8, 9])).toEqual([2, 3, 5, 6, 8, 9])
    });
    it('is able to merge two other sorted arrays into one sorted array', function(){
      expect(merge([3, 8, 9], [2, 5, 6])).toEqual([2, 3, 5, 6, 8, 9])
  });
  });
