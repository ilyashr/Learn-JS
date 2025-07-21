/* Проверить, является значение номером телефона России*/

// Верные номера 

const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 3235356';
const num5 = ' +7(910) 3235356 ';

// не верные номера

const num1Error = '89103235'
const num2Error = '+7d910d323-53-56'
const num3Error = '9+7103235356'
const num4Error = '89103q35356'

function isPhoneNumber (num) {
    num = num.trim();
    num = num.replace('+7', '8');
    if  (!num.startsWith('8')) {
        return false;
    }
    num = num.replaceAll('(', '');
}