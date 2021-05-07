/*Задание №1
var a = 1, b = 1, c, d;
c=  ++a;console.log(c);//Префиксная форма возвращает новое занчение
d = b++; console.log(d);//Постфиксная форма возвращает старое значение
c = (2+ ++a); console.log(c);//3 + 2 = 5
d = (2+ b++); console.log(d);// 3+1 = 4
console.log(a);
console.log(b);
*/

/*№2
var a = 2;
var x = 1+(a*=2);
console.log(a); // 4
console.log(x);// 5

/Задание №3
var a = Math.random(-1,1);
var b = Math.random(-1,1);

if(a >=0 & b>=0){
    console.log( "Разность",a - b);
}
else if(a <0 & b<0){
    console.log("Произведение",a * b)
}
else if((a<0 & b>=0) && (a>=0 & b<0)){
    console.log("Сумма",a + b)
}*/

/*Задание №5
function math(arg1, arg2){
    return console.log("Сумма="+parseFloat(arg1+arg2)+"\nРазность="+parseFloat(arg1-arg2)+"\nПроизведение="+parseFloat(arg1,arg2)+"\nЧастное="+parseFloat(arg1/arg2))
}
math(1,2)
*/
/*
function mathOperation(arg1, arg2,operation){

    switch(operation){
        case "+":
            console.log("Сумма="+parseFloat(arg1+arg2))
            break
        case "/":
            console.log("Частное="+parseFloat(arg1/arg2))
            break
        case "*":
            console.log("Произведение="+parseFloat(arg1*arg2))
            break
        case "-":
            console.log("Разность="+parseFloat(arg1-arg2))
    }
}
mathOperation(2,4,"/")
 */
/*Задание №7
console.log("Результат сравнения="+(null === 0) +"\nВсё дело в абстрактном алгоритме сравнения"+"\nНа хабре есть замечательная статейка:https://habr.com/ru/company/ruvds/blog/337732/")
 */

/*Задание №8
function power(val,pow) {
    if(pow == 1) {
        return val;
    }
     else{
         return console.log( val * power(val,pow-1))
    }
}
power(2,5)
*/


/*Задание №4
for(let a = 4;a<15; a++){
    console.log(a+1)
}