const task1 =()=> {
    console.log('started task1')
setTimeout(() => {
    console.log('completed task1')
    callback()

}, 3000);
}

const task2 =()=> {
    console.log('started task2')
setTimeout(() => {
    console.log('completed task2')
    callback()

}, 8000);
}

const task3 =()=> {
    console.log('started task3')
setTimeout(() => {
    console.log('completed task3')
    callback()

}, 2000);
}
const task4 =()=> {
    console.log('started task4')
setTimeout(() => {
    console.log('completed task4')
    callback()

}, 5000);
}
const task5 =()=> {
    console.log('started task5')
setTimeout(() => {
    console.log('completed task5')
    callback()

}, 4000);
}

task1 (() => {
    task2 (() => {
        task3 (() => {
            task4 (() => {
                task5 (() => {  
 console.log('All tasks completed')
    })
     })
    })
})
})