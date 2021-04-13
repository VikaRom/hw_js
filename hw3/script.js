//3.1



class  Employee{
    constructor(obj) {
        for(let  key in obj){
            this [key]= obj[key]
        }

    }
    //3.2
    getFullName(){
      return  `${this.name}  ${this.surname}`
    }
    //3.7

    get  fullInfo(){
        let result = '';
        for(let key in  employeeObj){
         result +=  `${key} - ${employeeObj[key]}, `
        }
        return result
    }
set  fullInfo(obj){
        for(let key in obj){
            if(key in this){
                this[key] = obj[key]
            }
        }
}





}
const employeeObj = new  Employee(emplyeeArr[0]);
console.log(employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'});

console.log(employeeObj.fullInfo)
//3.3
const createEmployesFromArr = (arr) => {
    const   arrAllEmpl = [];
    for(let  emplyee of arr){
        arrAllEmpl.push(new Employee(emplyee))
    }
    return arrAllEmpl
};
const  emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr);

//3.4
const getFullNamesFromArr = (arr) => {
    let arrFullName = [];
    for(let key of arr){
        arrFullName.push(key.getFullName())

    }
    return arrFullName
}
console.log(getFullNamesFromArr(emplyeeConstructArr));

//3.5
const getMiddleSalary = (arr) => {
    let sum = 0;
    for(let key in arr){

        sum += arr[key].salary
    }
    return  Math.round(sum / arr.length)
}
console.log(getMiddleSalary(emplyeeConstructArr));
//3.6
const getRandomEmployee = (arr) => {

    const   randomNum  = function (min, max) {
        return Math.round (Math.random() * (max - min) + min);
    }
   return arr[randomNum(0,arr.length-1)]

}
console.log(getRandomEmployee(emplyeeConstructArr));


