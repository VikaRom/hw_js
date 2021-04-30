console.log(condidateArr)
const removeUser = function (index) {
    return condidateArr.splice(index, 1)
}
console.log(removeUser(1));

//6.2
const getAllKeys = function (obj) {
    return Object.keys(obj);
}
const obj = {name: 'Vasya', age: 1}
console.log(getAllKeys(obj))


//6.3
const getAllValues = function (obj) {
    return Object.values(obj)
}
console.log(getAllValues(obj));

//6.4

const insertIntoarr = function (obj, id) {
    let index = condidateArr.findIndex(user => user._id === id)
    if (index === -1) return 'введите существующий id'
    return condidateArr.splice(index, 0, obj)
}
console.log(insertIntoarr({id: 1, name: 'Kolya'}, '5e216bc9f51c08c39c3ed006'));

//6.5

class Condidate {
    constructor(obj) {
        Object.assign(this, obj)
    }

    get state() {
        const adress = this.address.split(',')
        return adress[2]
    }
}

const condidate = new Condidate(condidateArr[0])
console.log(condidate.state);
//6.6

// const getCompanyNames = function () {
//     resultArr = [];
//     const companiesArr = condidateArr.map(el => el.company)
//     companiesArr.forEach(comp => {
//         if (!(resultArr.includes(comp))) {
//             resultArr.push(comp)
//         }
//     })
//     return resultArr
// }
// console.log(getCompanyNames());

// //2 variant
const getCompanyNames = function () {
    const resArr = condidateArr
        .map(el => el.company)
        .filter((el, index, arr) => {
            if (arr.indexOf(el) === index) return true
            return false
        })
    return resArr;
}
console.log(getCompanyNames());

//6.7
const getUsersByYear = function (year) {
    const condidates = condidateArr.filter(el => {
        return el.registered.split('-')[0] == year
    })
        .map(el => el._id);
    return condidates
}
console.log(getUsersByYear(2018));


//6.8
const getCondidatesByUnreadMsg = function (num) {
    const condidates = condidateArr.filter(user => user.greeting.split(' ')[5] == num)
    return condidates;
}
console.log(getCondidatesByUnreadMsg(1))


//6.9
const getCondidatesByGender = function (gender) {
    const condidates = condidateArr.filter(user => user.gender === gender)
    return condidates
}
console.log(getCondidatesByGender('male'));

//6.10

const arr = [1, 2, 3, 4, 5]
Array.prototype.customJoin = function (separator = ',') {
    let resultStr = '';
    for (let i = 0; i < this.length; i++) {
        if (this.length - 1 === i) {
            resultStr += this[i]
            continue
        }
        resultStr += this[i] + separator
    }
    return resultStr
}
console.log(arr.customJoin());


// Array.prototype.customReduce = function (accumulator, value, index, arr, callback) {
//     for(let i = 0;i<this.length;i++){
//
//     }
// }














