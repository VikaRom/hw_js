//2.1
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия'
};
let foo = function () {
	let newArr = [];
	for (let key in citiesAndCountries) {
		newArr[newArr.length] = key + "- это " + citiesAndCountries[key]
	}
	console.log(newArr)
}
foo()
//2.2
let getArray = function (amount){
	if(amount% 3 !== 0){
		console.log('введите число еоторое нацело делиться на 3 ');
		return;

	}
	let firstArr = [];
	let count = 1;
	for(let i = 0; i< amount/3;i++){
		let newArr = []
		for(let j = 0;j < 3;j++){
			newArr[newArr.length] = count++;
		}
		firstArr[firstArr.length] = newArr
	}
	console.log(firstArr);
}
getArray(9)

//2.3
const namesOfDays = {
	ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница','Суббота', 'Воскресенье'],
	en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday', 'Sunday'],
}
//первый вариант решения
// let getNameOfDay = function (lang,day){
// 	console.log(namesOfDays[lang][day-1]);
// }
// getNameOfDay('ru', 3)
//второй вариант решения
const getNameOfDay = (lang,day) => namesOfDays[lang][day-1]
console.log(getNameOfDay('ru', 3));

//2.4
     const fooCounter = function (){
     	const arr = [3, 4, 5, 10, 1, 99, 1];
     	let firstNum = 0;
     	let secondNum = 0;
     	for(let i = 0; i < arr.length; i ++){
			if(arr[i] === secondNum && arr[i] === firstNum){
				continue;
			}
     		if(firstNum === 0){
     			firstNum = arr[i];
			}
     		if(arr[i] < firstNum){
				secondNum = firstNum;
				firstNum = arr[i];
			}
			if(arr[i] < secondNum && arr[i] !== firstNum ){
				secondNum = arr[i];
			}

		}
	return secondNum + firstNum
	 }
console.log('//2.4 --> ' + fooCounter());

 const counter = function (){
 	const  testing =  [1, 0, 0, 0];
 	let num = 1;
 	let result = 0;
 	for (let  i = testing.length-1;i >= 0;i--){
 		if(i === testing.length-1 ){
 			if(testing[i] === 1){
 				result =1
			}
 			num = 1;
 			continue;
		}
 		num *= 2;
		if(testing[i] === 1){
			result +=num
		}
	 }
	return result
 }
console.log(counter());
