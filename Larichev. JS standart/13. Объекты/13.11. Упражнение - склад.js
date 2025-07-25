/* Сделать объект склад с методами добавления на склад,
поиска по складу товара и расчет веса */

const warehouse = {
    goods: [],
    findGoodByID: function (id) {
        return this.goods.find(g => g.id == id);
    },
    addGood: function (good) {
        const existedGood = this.findGoodByID(good.id);
        if (existedGood) {
            console.log('Этот товар уже есть на складе')
            return;
        }
        this.goods.push(good);
    },
    getWeightKg: function () {
        return this.goods.reduce ((acc, el) => {
            acc+= el.weight?.kg ? el.weight.kg : 0;
        }, 0)
    }
};

/* товары */

const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 2
    },
}

const paper = {
    id: 3,
    color: 'red'
}

warehouse.addGood(car);
warehouse.addGood(car);
warehouse.addGood(chair);
warehouse.addGood(paper);
console.log(warehouse.goods);
let findedItem = warehouse.findGoodByID(6);
console.log(findedItem);
findedItem = warehouse.findGoodByID(1);
console.log(findedItem);
const w = warehouse.getWeightKg();
console.log(w);