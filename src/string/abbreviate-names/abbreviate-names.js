/*
Create a function `abbreviate` which converts a name into initials.

The output should be capital letters with a dot separating them.

Example:
* "Alyson Hannigan" -> "A.H"
* "Cobie Smulders" -> "C.S"
* "Neil Patrick Harris" -> "N.P.H"

Add you own tests.

*/

function abbreviate(name){

    let arr = name.split(" ");

    let n = arr[0].toUpperCase().substring(1, 0);
    let s = arr[1].toUpperCase().substring(1, 0); 
   
    if (arr.length <= 2){
        return `${n}.${s}`
    } else {
        let w = arr[2].toUpperCase().substring(1, 0);
    return `${n}.${s}.${w}`}
}


module.exports = abbreviate;
