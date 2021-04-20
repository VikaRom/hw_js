//4.1
class Student {
    constructor(enrollee) {
        this.id = Student.id++;
        Object.assign(this, enrollee)
        this.isSelfPayment = true;

        Student.studentsArr.push(this)
        Student.sortingEnrolleeByRatingPoint()
        Student.addIsSelfPaymentStatus()
    }

    static id = 1;

    static studentsArr = [];

    static  sortingEnrolleeByRatingPoint() {
        Student.studentsArr.sort((el1, el2) => {
            if (el1.ratingPoint === el2.ratingPoint) {
                if (el1.schoolPoint < el1.schoolPoint)
                    return 1
                if (el2.schoolPoint > el2.schoolPoint)
                    return -1
            } else if (el1.ratingPoint < el2.ratingPoint)
                return 1;
            else if (el1.ratingPoint > el2.ratingPoint)
                return -1;
        });
    }

    static  addIsSelfPaymentStatus() {
        for (let i = 0; i < Student.studentsArr.length; i++) {
            if (i <= 4 && Student.studentsArr[i].ratingPoint >= 800) {
                Student.studentsArr[i].isSelfPayment = false;
            } else {
                Student.studentsArr[i].isSelfPayment = true;
            }
        }
    }

    static getStudentsByIsSelfPaymentStatus (flag = false){
        const arrBudgetStudents = [];
        for(let i = 0; i< Student.studentsArr.length;i++){
            if(Student.studentsArr[i].isSelfPayment === flag){
                arrBudgetStudents.push(Student.studentsArr[i])
            }
        }
        return arrBudgetStudents;
    }
}



for (let student of studentArr) {
    new Student(student)
}

console.log(Student.getStudentsByIsSelfPaymentStatus());

//4.2

class CustomString {
    reverse(str) {
        let result = '';
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i]
        }
        return result;
    }

    ucFirst(str) {
        let firstLetter = '';
        for (let i = 0; i < str.length; i++) {
            if (i === 0) {
                firstLetter = str[i].toUpperCase();
                continue;
            }
            firstLetter += str[i]
        }
        return firstLetter;
    }

    ucWords(str) {
        let result = '';
        const newStr = str.split(' ');
        for (let value of newStr) {
            for (let i = 0; i < value.length; i++) {
                if (i === 0) {
                    result += ' ' + value[i].toUpperCase();
                    continue;
                }
                result += value[i]
            }
        }
        return result
    }
}

const string = new CustomString()
console.log(string.reverse('qwerty'))
console.log(string.ucFirst('qwerty'))
console.log(string.ucWords('qwerty qwerty qwerty'))


//4.3

class Validator {
     checkIsEmail(email) {
        const temp = email.split('@');
        if (temp.length !== 2) {
            return false;
        }
        const secondPartEmail = temp[1];
        const lastPartOfEmail = secondPartEmail.split('.');
        if (lastPartOfEmail.length !== 2) {
            return false;
        }
        if (lastPartOfEmail[0].length < 3) {
            return false;
        }
        if (lastPartOfEmail[1].length > 1) {
            return true;
        }
        return false;
    }

    checkIsDomain(str) {
        const twoPartOfEmail = str.split('.');
        if (twoPartOfEmail.length !== 2) {
            return false;
        }
        if (twoPartOfEmail[0].length < 1) {
            return false
        }
        if (twoPartOfEmail[1] !== 'com') {
            return false;
        }
        return true;
    }

    checkIsDate(str) {
        const threePartOfDate = str.split('.');
        if (threePartOfDate.length !== 3) {
            return false;
        }
        if (threePartOfDate[0].length > 2 ||
            threePartOfDate[0] > 31 ||
            threePartOfDate[0] === 0 ||
            threePartOfDate[0].length < 1
        ) {
            return false;
        }
        if (threePartOfDate[1].length > 2 ||
            threePartOfDate[1] > 12 ||
            threePartOfDate[1] === 0 ||
            threePartOfDate[1].length < 1
        ) {
            return false;
        }
        if (threePartOfDate[2].length !== 4 ||
            threePartOfDate[2] === 0
        ) {
            return false;
        }
        return true;
    }

    checkIsPhone(str) {
        const allPartsOfNumber = str.split(' ');
        if (allPartsOfNumber.length !== 3) {
            return false;
        }
        if (allPartsOfNumber[0] !== '+38') return false;
        if (allPartsOfNumber[1].length !== 5) return false;
        if (allPartsOfNumber[2].length !== 9) return false;
        const lastPartOfNumber = allPartsOfNumber[2].split('-');
        for (let i = 0; i < lastPartOfNumber.length; i++) {
            if (Number.isNaN(+lastPartOfNumber[i])) return false;
        }
        return 'numberPhone => ' + true
    }
}

const validator = new Validator()
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 947-89-93'));