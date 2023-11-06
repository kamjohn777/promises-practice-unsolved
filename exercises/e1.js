/**
 * PROMISE CONSTRUCTOR (Resolve with onFulfilled callback argument )
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 * Create a promise with a constructor that follows the requirements:
 * * Is assigned to the getPromise exported constant
 * * The promise is resolved (fulfilled) with a message of 'The PROMISE was RESOLVED' in 1 second.
 * * (setTimeout function usage is required)
 * After the promise is settled do the following:
 * * Using .then() syntax with onFulfilled callback argument:
 * * * log the resolved promise value
 * * * Return the value
 * The getPromise constant must be exported
 * Example: export const getPromise = <Your promise constructor code>
 *          getPromise.then(<Your onFulfilled callback code>)
 */

// Your code goes here

// function practicePromise() {
//     return new Promise((res, rej) => {
//      setTimeout(() => { 
//         const operationSuccessful = true;

//         if (operationSuccessful) {
//             res('Worked');
//         } else {
//             rej(new Error('Failed'));
//         }
//     }, 2000);
//  });
// }

// practicePromise()
// .then(res => {
//     console.log(res);
// })
// .catch(rej => {
//     console.log(rej);
// })


export const getPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res('The PROMISE was RESOLVED');
    }, 2000);
});

getPromise.then(res => {
    console.log(res);
    return res;
});

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
