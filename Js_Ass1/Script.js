function foo() {
    x = 1;
    function x() { }
    var x = '2';
    return x;
}
alert( typeof foo() );

//Output:- string

function foo() {
    return x;
    x = 1;
    
    function x() { }
    
    var x = '2';
}
console.log( typeof foo() ); 

//Output:- function

var x = 1;
function foo() {
    x = 10;
    return;
    function x() {}
}
foo();
console.log( x );

//Output:- 1