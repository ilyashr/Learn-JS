const user = {
    name: 'Илья',
    surname: 'Иванов',
    age: 34,
    /* Функция в объекте как свойство */
    getFullName: function (name, surname) {
        return name + ' ' + surname;
    }
}
console.log(user);
/* Выводим результат работы функции */
console.log(user.getFullName('Илья', 'Иванов'));


/* Анонимная функция */
const getFullName = function (user) {
    return user.name + ' ' + user.surname;
}
console.log(getFullName(user));

/* Усовершенствуем функцию | Не сломается при копировании и переименовании объекта*/

const user2 = {
    name: 'Дмитрий',
    surname: 'Иванов',
    age: 30,
    /* Функция в объекте как свойство */
    getFullName: function (name, surname) {
        return this.name + ' ' + this.surname;
    }
}
console.log(user2);
/* Выводим результат работы функции */
console.log(user2.getFullName('Илья', 'Иванов'));