// alert('hello, world');
//var greetings='hello, world';
//document.wrire('hello, world');
//console.log(greetings);

// var userName= prompt('Your name');
// var greet='Hello'+userName;
// document.write(greet);

// var age = Number (prompt ('enter Your age'));
// var nextAge = age+1;
// var msg='<br>Soon you will be'+ nextAge;
// document.write(msg);

//function sum(a,b,c) {
 //   var result =a + b + c;
  //  return result;
//}
//var calcSum = sum(10, 20, 30);
//document.write(calcSum);
// function checkAge (age)
// if (age >18) {
//     return'Adult';
// ]else{
//     return'Kid';
// }
    
// }

//var d, x1, x2;
//var result;

function sqv (a,b,c) {
    var d=b*b-4*a*c;
        if (d<0)
        {
            var res = 'Рівняння не має дійсних коренів';
            return (res);
        } 
    else {
        var x1= ( - b + Math.sqrt( d ) ) / ( 2 * a);
        var x2=( - b - Math.sqrt( d ) ) / ( 2 * a);
        res= ('x1 = '+x1 + '    ' +'x2 = ' + x2);
        return(res);
        }
    
}

var a = Number (prompt('Enter coefficient a'));
var b = Number (prompt('Enter coefficient b'));
var c = Number (prompt('Enter coefficient c'));
var res = sqv(a,b,c);

 document.write(res);
