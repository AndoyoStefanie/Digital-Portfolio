let name = 'Baal';

function Hello() {
    let name = 'Sarah';
    return 'Hello' + name;


}
console.log(Hello)

/*The output of the following code is 'Hello' because the
local variable takes precedence over the global
variable name*/






/*callback function allows an object or a variable in one function
to be used by other functions of the code*/

function getStud(id) {
    alert('Get' + id);
}

function inputId(callback) {
    var id = prompt('Please enter your ID:');
    callback(id)
}
inputId(getStud);

/*The variable name in the function inputId is used on the other function
in the getStud code.*/















for (var i=0; i<=15; i++) {  /*the variable is named i which has a value set to 0,
    since the problem starrts at zero. A condition is also specified
    which allows the incrementation only until 15. The i++ allows the code
    to increment by 1 until it returns false*/


    if (i === 0) {
        console.log(i + "is even"); /*this checks if i is equal to 0 */
    }
else if (x % 2 === 0) {
    console.log(i + "is even");
/*checks if i has a remainder of 0, if true it will execute*/
}
else {
    console.log(i + "is odd"); /*if both are false, the else condition will execute,
    but if not the console.log will execute.*/
}
}




/*let index = 0 be the first element, after we compare the current element with the next element of the array.
*/

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
           /* If the current element is greater than the next element of the array, we swap them.*/
            if (x[i] < x[i+1])
            {
               var temp = x[i]; 
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true; /*If the current element is less than the next or right side of the element, we proceed to
               move to the next element. We then repeat Step 1 until we reach the end of the index*/
            }
        }
        n--;
    } while (swapp);
 return x; 
}
console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

