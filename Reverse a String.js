// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

// reverseString("hello") should return the string olleh.
// reverseString("Howdy") should return the string ydwoH.
// reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.

function reverseString(str) {
    return str.split("").reverse().join("");
}