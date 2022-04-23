const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        true
        ? setTimeout(() => resolve('Do something Async'), 2000)
        : reject(new Error('Test Error'));
    })
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log(something);
}

console.log('Before');

doSomething();

console.log('After');

const anotherFunction = async () => {
    try
    {
        const something = await doSomethingAsync();
        console.log(something)
    }
    catch
    {
        console.log(error)
    }
}

console.log('Before');

anotherFunction();

console.log('After');