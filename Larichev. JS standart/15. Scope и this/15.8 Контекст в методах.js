'use strict'

const user = {
    firstName: 'Ilya',
    lastName: 'Ivanov',
    age: 20,
    getUserInfo: function() {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);

        const canDrink = () => {
            if (this.age >= 18) {
                console.log('Do not drink');
            } else {
                console.log('Drink');
            }
        }
        canDrink();
    },
    getUserInfoArrow: () => {
        console.log(this);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

user.getUserInfo();
user.getUserInfoArrow();