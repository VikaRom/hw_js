//1.1
for (let i = 1; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log('fizbuz')
        continue
    }
    if (i % 2 == 0) {
        console.log('fiz')
    }
    if (i % 2 != 0) {
        console.log('buz')
    }
}

//1.2
let countFactorial = function (num) {
    let sum = 1;
    for (let i = num; i > 0; i--) {
        sum *= i
        //sum = i* (i-1)

    }
    console.log(sum)
}
countFactorial(5)

//1.3
let foo = function () {
    const inPagePaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;
    let papersin8Weeks = consumptionPerWeek * weeksAmount;

    let allPapers = papersin8Weeks % inPagePaper

    let all = papersin8Weeks - allPapers
    let result = all / inPagePaper
    console.log('нужно на 8 недель пачек: ' + (allPapers != 0 ? result + 1 : result))
}
foo()

//1.4

let searchNumberRoom = function(){
    const roomsOnFloor = 3;
    const floors = 9;
    const roomNumber = 35
    let floor = 0;
    ;
    let roomInEntrance = floors * roomsOnFloor //27
    let entrance = roomNumber / roomInEntrance

    let temp = roomNumber % roomInEntrance // остаток от деления подьезды
    //console.log(temp)
    if(temp != 0){
       let numberWithoutOstatok =  roomNumber - temp
       entrance = (numberWithoutOstatok / 27) +1

    }
    temp2 = roomNumber % roomInEntrance % roomsOnFloor ;
    console.log(temp2)
    if(temp2 != 0){
        let ostattoc= roomNumber - temp2
        floor = (ostattoc % roomInEntrance / roomsOnFloor) + 1
    }else{
        floor = roomNumber % roomInEntrance / roomsOnFloor;

    }


    console.log('подьезд ' + entrance + 'этаж ' + floor)
   }

searchNumberRoom()

//1.5
const medianNumber = 9;
for(let i = 1;i <= medianNumber; i++){
    let line = '';
    for(let j = 1 ;j <= medianNumber * 2 - 1; j ++){
        //line += '*'
        if(j> medianNumber - i && j <  medianNumber + i){
            line += '*'
        } else line += ' ' 
        
        
    }
    console.log(line + ' // ' + i)
}

