const promise1 = new Promise((resolve ,reject) => {
    setTimeout(() => {
        resolve('success!!')
    },4000)
    })


promise1.then(value=> {
    console.log(value)
})

const promise2 = new Promise((resolve ,reject) => {
    let hasPassedTest = true
    if(hasPassedTest){
        resolve()
    }else 
    reject()
})

promise2.then(() => {
    console.log('congratulations!! ,You have a car')
}).catch(()=> {
    console.log('Am sorry !! ,You do not have anything')
})