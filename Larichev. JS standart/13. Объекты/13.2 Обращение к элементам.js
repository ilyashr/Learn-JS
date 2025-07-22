const userArray = ['Илья', 'Иванов', 24];
const user = {
    name: 'Илья',
    surname: 'Иванов',
    age: 34,
    skills: [
        'Программирование',
        'Ремонт электроники'
    ]
}
console.log(user);
console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user.city); /* свойство создано позднее */
/* Dot notation | обращение через точку используем по максимуму */
console.log(user.skills);
console.log(user.skills[0]);
console.log(user.skills[1]);
/* Bracket notation | обращение через скобки используем, если свойство расчетное*/
console.log(user['skills']);
/* Можно применять в расчетах */
console.log(user['age'] + 10);

/* Пример с вводом значения пользователем prompt('Введите свойство') */
const res = 'Город';
console.log(res);

/* Добавление в объект новой пары ключ: значение через точку*/
user.city = 'Vitebsk';
console.log(user);
console.log(user.city);

/* Добавление в объект новой пары ключ: значение через скобки*/
user['city'] = 'Nizhniy Novgorod';
console.log(user);
console.log(user.city);

/* Изменение свойства объекта */
user.age = user.age + 1;
console.log(user.age);
user['age'] = user['age'] + 1;
console.log(user.age);