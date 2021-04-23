//5.1
const firstСlosure = ((sum = 0) => (num) => sum += num)()

console.log(firstСlosure(2));
console.log(firstСlosure(4));
console.log(firstСlosure(6));

//5.2
const secondClosure = (() => {
    let newArr = [];
    return (value) => {
        if (value === undefined) return newArr = [];
        newArr.push(value);
        return newArr;
    }
})()
console.log(secondClosure(1));
console.log(secondClosure(0));
console.log(secondClosure(3));

//5.3
const thirdClosure = (() => {
    let time = 0;
    return () => {
        if (time === 0) {
            time = new Date().getTime();
            return 'Enabled';
        }
        return Math.floor((new Date().getTime() - time) / 1000)
    }
})()

//5.4

const parseTime = time => {
    let min = (time - (time % 60)) / 60
    let sec = (time % 60)
    let parsedMin = (min < 10 ? '0' : '') + min
    let parsedSec = (sec < 10 ? '0' : '') + sec
    return `${parsedMin} : ${parsedSec}`
}
const fourthClosure = (time) => {
    const intervalId = setInterval(() => {
        if (time === 0) {
            clearInterval(intervalId)
            console.log('Time End');
            return;
        }
        console.log(parseTime(time--))
    }, 1000)
}
fourthClosure(5)

