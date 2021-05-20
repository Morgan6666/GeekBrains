/*
function convert(num){
        let obj = 0;
        if(num >=0 & num <=999){

             obj = {
                "Сотни": Math.trunc(num / 100),
                "Десятки": (Math.trunc(num / 10)) % 10,
                "Единицы": num % 10
            }
            return console.log(obj)


        }
        else{
            return console.log("Вы ввели значение из другого диапозона="+obj)
        }
}
convert(0)
*/

/*Первый вариант задания №2
class Busket {
    constructor() {
        this.val = this.val;

    }



    products(){
        let counts = 0;
        let busket = {
            brain: 1000000,
            kidney: 10000000000,
            liver: 1000,
            pancreas: 10
        }
        for(this.val in busket){
            counts += busket[this.val]

        }
        return console.log(counts)

    }

}


new Busket().products()
*/
function busket() {
    shops = {}
    shops['Human_organs'] = {brain: 1000000, kidney: 200000, pancreas: 1000000, hearts: 10}
    shops['Human_cells']= {'T-cells': 1000000, 'B-cells': 200000, 'DK-cells': 3000000, 'NK': 3000000}
    shops['Viruses'] = {Ebola: 500000, HV1: 1000000}
}
function method() {
    busket.call(this)


    shops.count = function counts(shop_value) { /*Подсчитываем товар*/
        let counts_1 = 0;

            for (this.val in shop_value) {

                counts_1 += shop_value[this.val]
            }
        for(key_1 in shops) {
            console.log(`Количество ${key_1}  в корзине =` + counts_1)

        }
    }
    for(this.val_1 in shops) {

        shops.count(shops[this.val_1])
    }

    let a = 'Печень'; /* На prompt ругается*/
    let b = 'Печень';

    shops.append = function apend(a){
        shops[a] = a;
        return console.log("Ваш товар",shops[a],"добавлен")
    }
    shops.del = function del(b){
        delete shops[b]
        return console.log('Элемент ',b,"из корзины удалён")
    }
    shops.append(a)
    shops.del(b)

}
busket()
method()
