/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    nums1=nums1.concat(nums2).sort(function(a,b) { return a - b })
    length=nums1.length-1;
    number=length/2;
    if(number % 1 == 0){
        return nums1[number];
    }
    else{
        return (Math.abs(nums1[Math.floor(number)])+Math.abs(nums1[Math.ceil(number)]))/2;
    }
};