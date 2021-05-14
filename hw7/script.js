console.log(condidateArr);
//7.1
const searchCandidatesByPhoneNumber = phone => {
    return condidateArr.filter(user => user.phone.replace(/\D/g, '').includes(phone.replace(/\D/g, '')))
}
console.log(searchCandidatesByPhoneNumber('4'));


//7.2
const getCandidateById = id => {
    const condidates = condidateArr.find(user => user._id === id)

    const result = condidates.registered
        .split('', 10)
        .join('')
        .split('-')
        .reverse()
        .join('/')

    condidates.registered = result
    return condidates

}
console.log(getCandidateById('5e216bc9a6059760578aefa4'));


//7.3

const sortCandidatesArr = sortBy => {
    if (!sortBy) {
        return condidateArr
    }
    return [...condidateArr]
        .sort((el1, el2) => {
            const parseToNum = (bal) => Number(bal.slice(1).replace(',', ''))
            const balanceOfEl1 = parseToNum(el1.balance)
            const balanceOfEl2 = parseToNum(el2.balance)
            if (balanceOfEl1 === balanceOfEl2)
                return 0;
            if (balanceOfEl1 > balanceOfEl2) {
                return sortBy === 'asc' ? 1 : -1
            }
            if (balanceOfEl1 < balanceOfEl2) {
                return sortBy === 'desc' ? -1 : 1
            }
        })
}

console.log(sortCandidatesArr('asc'));


//7.4

const getEyeColorMap = () => {
    const newObj = {};
    for (let i = 0; i < condidateArr.length; i++) {
        const key = condidateArr[i].eyeColor
        if (key in newObj) {
            newObj[key].push(condidateArr[i])
            continue
        }
        newObj[key] = [condidateArr[i]]
    }
    return newObj
}
console.log(getEyeColorMap());














