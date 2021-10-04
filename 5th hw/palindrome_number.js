// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

let isPalindrome = function(x) {
    const isNegative = x < 0 ? true : false,
          temp = x;
    let reversed = 0;

    if (isNegative) return false;

    while(x > 0){
        reversed = (reversed * 10) + (x % 10);
        x = parseInt(x / 10);
    }

    return reversed == temp;
};
