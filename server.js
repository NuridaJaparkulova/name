// const plasTwo = (num)=> {
//     return num+2
// }
// const arr = [1,2,3,4,5,6]
// const result = arr.map([plasTwo])
// console.log(result);

// const map = (foo) => {
//     // for( let )
// }

const getRandomNumber = ()=>{
    Math.round(Math.random()*10)
}
const bilet = new Promise((resolve, reject) => {
    const random = getRandomNumber()
    setTimeout(()=> {
        if(random > 5) {
            resolve('вы попали на ')
        } else {
            reject(new Error('мест не осталось'))
        }
    }, 3000)
})
// console.log(bilet);

bilet
    .then((resp) => {console.log(resp)}) // вместо resolve работает когда true
    .catch((err) => {console.log(err);}) //  вместо reject  работает когда false
    .finally(() => {console.log('доброго вам вечера');}) //в любом случае отработает
