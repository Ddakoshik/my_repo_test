
        // CHALLENGE 1: REVERSE A STRING
    // Return a string in reverse
    // ex. reverseString('hello') === 'olleh'

    function reverseString(str) {
        // return str
        //     .split('')
        //     .reverse()
        //     .join('');
        // console.log(strArr);

////////////////////////////////////////////////////
        // let revString = '';
        // for(let i = str.length - 1; i >= 0; i--){
        //     revString = revString + str[i];
        //     console.log(i);
        // }
        // return revString;
////////////////////////////////////////////////////
        // let revString = '';
        // for(let i = 0 ; i <= str.length - 1; i++){
        //     revString = str[i] + revString  ;
        // }
        // return revString;
////////////////////////////////////////////////////
        // let revString = '';
        // for(let char of str){
        //     revString = char + revString  ;
        // }
        // return revString;
////////////////////////////////////////////////////
        // let revString = '';
        // str.split('').forEach(function(char) {
        //     revString = char + revString;
        // });
        // return revString;
////////////////Errow fanction//////////////////////
        // let revString = '';
        // str.split('').forEach((char) => revString = char + revString);

        // return revString;
////////////////////////////////////////////////////
        // return str.split('').reduce(function(revString, char) {
        //     return char + revString;
        // }, '');
    }



    // CHALLENGE 2: VALIDATE A PALINDROME
    // Return true if palindrome and false if not
    // ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

    function isPalindrome(str) {
        // const revString = str.split('').reverse().join('');
        // return revString ===str;
    }



    // CHALLENGE 3: REVERSE AN INTEGER
    // Return an integer in reverse
    // ex. reverseInt(521) === 125

    function reverseInt(int) {
        // const revString = int.toString().split('').reverse().join('');
        // return parseInt(revString) * Math.sign(int);
    }



    // CHALLENGE 4: CAPITALIZE LETTERS
    // Return a string with the first letter of every word capitalized
    // ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
    function capitalizeLetters(str) {
        //     const strArr = str.toLowerCase().split(' ');
        //     for(let i = 0; i < strArr; i++) {
        //             strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
        //     }
        // return strArr.join(' ');
    }



    // CHALLENGE 5: MAX CHARACTER
    // Return the character that is most common in a string
    // ex. maxCharacter('javascript') == 'a'
    function maxCharacter(str) {}



    // CHALLENGE 6: FIZZBUZZ
    // Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
    function fizzBuzz() {}



    // Call Function
    const output = capitalizeLetters('Hi all i am a mAn');

    console.log(output);


