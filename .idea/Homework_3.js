/*Задание №1
let n = 100;
first_cycle:
    for(let i = 2; i<=n; i++){
        for(let j = 2; j<i; j++){
            if(i %j == 0)
            continue first_cycle
        }

        console.log(i);
    }
 */

/*Задание №2
let shops = new Array({"brain":85 *10**9},{"Human kidney":5600000000} , {"Human puncreas":38000000000000})
function countBasketPrice(shops) {
    let count = 0;
    for (i in shops) {
        for (j in shops[i]) {
            count += shops[i][j]
        }
    }
    return console.log("Общее количество клеток в корзине составляет=" +count)
}

countBasketPrice(shops)
 */


/*Задание №3
let a = 10;
for(i = -1;i<a;console.log(i++)){

}
 */

/*Задние №4
for(let i = 0; i<20; i+=1){
    console.log(Array(i).fill("*").join(' ') );
}
 */