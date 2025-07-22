//Деструктуризация

const user = {
    name: 'Илья',
    age: 34,
    city: 'Nizhniy Novgorod'
};

const { name, city } = user;
console.log(name);
console.log(city);


// REST-оператор (три точки ...) позволяет оставить остальные свойства 
// объекта в отдельном объекте
const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
    skills: ['Разработка', 'Дизайн'],
    creditCard: '4235-5687-5467-2367'
};

user.additionalData = additionalData;
console.log(user);
// Для каждого нового свойства приходится писать отдельно строку
user.skills = additionalData.skills;
console.log(user);
user.creditCard = additionalData.creditCard;
console.log(user);

// Spread-оператор позволяет добавлять дополнительные свойства в объект
// Чтобы этот пример работал то нужно объявить объект через let
//user = {
//    ...user,
//    ...additionalData
//}
//console.log(user);

// Объект, объявленный через const полность переприсвоить нельзя,
// но можно работать с внутренним наполнением добавляя ключ: значение

user.test = 'тестовое значение';
console.log(user.test);