var findMedianSortedArrays = function (nums1, nums2) {
    const sorted = [];
    let pointer1 = 0;
    let pointer2 = 0;
    if (nums1.length==0) {
        pointer = 1;
    } else if (nums2.length==0) {
        pointer2 = 1
    }

    while (pointer1<nums1.length||pointer2<nums2.length) {
        let num1 = nums1[pointer1] 
        let num2 = nums2[pointer2]
        if ((!num1 || num2 < num1) && num2) {
          sorted.push(num2);
          pointer2++;
        } else if ((!num2 || num1 < num2) && num1) {
          sorted.push(num1);
          pointer1++;
        } else {
            if (num1!==undefined) {
                sorted.push(num1);
                pointer1++;
            }
            if (num1 !== undefined) {
              sorted.push(num2);
              pointer2++;
            }
        }
    }
    if (sorted.length==1) return sorted[0]
    return ((sorted[Math.floor(sorted.length/2)-1]+sorted[Math.ceil(sorted.length/2)])/2)
};


findMedianSortedArrays([2,4,6], [1,3,5,9])
console.log(findMedianSortedArrays([1, 9], [2,4]));
console.log(findMedianSortedArrays([0], [0]));

