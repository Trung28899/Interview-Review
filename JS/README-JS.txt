1. Type coersion (== vs ===):
    - == : 
        +, do type coersion. Means that it converts
            one data type to the other
        +, 23 == '23' is true,
           it converts string number to number
        +, Basically means, variable can be the same 
            values and doesn't need to be the same type
            to be equal

    - === : 
        +, Doesn't do type coersion
        +, 23 === '23' is false
        +, 2 variables has to be the same value
            and same data type for it to be equal

    - Ternary Operator: 
        +, Example: 
            var drink = age >= 18 ? 'beer' : 'juice';

2. Basics of JS: 
    a. var vs let: 
        - var vs let: 
            +, let is a new feature in ECMAscript 6
            +, There is a scope different
            +, let variables can't be accessed outside 
            the scope it declared
            +, var variable can, try this code to see: 

        if (true) {
            var x = 2;
            let y = 3;
        }
        console.log(x);
        console.log(y);

        - Javascript datatypes: 
            +, number
            +, string
            +, object
    
    b. var and let vs const:
        - const can't be reassinged, however it is mutable
        - like let, const can't be access outside of
            its declaring scope

    c. this keyword: 
        - 'this' key word refering to the current object 
        of the context that contain it
        - if the this key word is not inside any specified object 
        > it will be referred to the Window object

3. DOM manipulation: 
    a. What is DOM: 
        - Document Object Model
        - It is a structured representation of HTML docs
        - It is used to connect webpage to javascripts

        See Available Selector Functions Here: 
        https://www.w3schools.com/js/js_htmldom_elements.asp

    b. How to do DOM manipulation: 
        - Step 1: select the element (getElementById, 
            querySelector, etc...)
        - Step 2: register an event listener for the 
            element selected (addEventListener(event, func))
        - Step 3: pass in function for event listener

4. ES6 and its concepts: 
    a. Hoisting: 
        - refering to the method of calling a function 
        before declaring it
        - Hoisting doesn't work with function expression
        only work with function declaration

        For example: only calculateAge() works down below
                    retirement won't

        calculateAge(1965);
        // this is function declaration
        function calculateAge(year) {
        console.log(2016 - year);
        }

        retirement(1956);
        // This is function expression
        let retirement = (year) => {
        console.log(65 - (2016 - year));
        };

    b. Closure: 
        - Closure: An inner function has always access to the variable and
        parameters of its outer function. 
        
        - This is not available for every languages, for i.e: Java doesn't have it

        - Use case returning a function within a function

    c. Destructuring: 
        - Oposite with constructuring
        - constructuring is the process of forming a data structure
            with different data
        - destructuring is the process of assigning different parts of
            a data structures to different variables
        
        example: 

        const obj = {
            firstName: 'Trung', 
            lastName: 'Trinh'
        }; 
        const {firstName, lastName} = obj; 
    
    d. Spread Operator vs Rest Operator: 
        - Spread Operator: 
            +, Take an array and transform it 
                into multiple different values
            +, Use in a function call

            const familyTrinh = ['Dung', 'Yen', 'Ngoc']; 
            const familyTran = ['Linh', 'Boo']; 
            const bigFamily = [...familyTrinh, 'Bin', ...familyTran];
        
        - REST Operator: 
            +, Collects multiple single values and transform it into 
                an array
            +, Use in function declaration

        Example: 

        function isFullAge6(...years){
            years.forEach(cur => {
                console.log((2020 - cur) >= 18); 
            });
        }    

5. Basic of OOP: 
    a. What is OOP: 
        - Object Oriented Programming: is a programming method 
        based on the concepts of object which can contain data
        (fields) and code (methods)

        - 4 Pillars of OOP: Abstraction, Encapsulation, Inheritance and Polymorphism

    b. 4 Pillars of OOP
        - Abstraction: 
            +, Is the process of showing only neccessary features of an 
            object and hide the irrelevant features or data

            Example of Abstraction in Javascript: See this video from 
            5:00
            https://www.youtube.com/watch?v=jM0WcyQWMSM

        - Encapsulation: 
            +, The ability to wrap up data and related methods into a single 
            unit. I.e: class

        - Inheritance: 
            +, Inheritance enables you to create a new class 
            based on an existing class
            +, class = blue print of potential objects
            +, superclass and subclass
        
        - Polymorphism: 
            +, Is the ability of an object to takes on many forms and function
            +, Example: the + sign 
            +, Another example: a variable of a superclass can refer to a subclass
            object

    c. Inheritance vs ES6 classes: 
        - Line 609 on this link: 
        https://github.com/Trung28899/complete-js-course/blob/master/7-ES6/starter/script.js

6. Asynchronous javascripts: 
    a. Understanding How Javascript works:   
        - JS engine (V8) includes:       
            +, Memory Heap: allocate dynamic memory to store objects and variables
            +, Call stack: allocate static memory that read and execute our code

        - JS runtime environment: 
            +, Web API: DOM, AJAX (http requests), setTimeOut
            +, Callback Queue: after web api is triggered > add operations
             to call back Queue
            +, Event Loop: continous checking if call stack is empty 
            > pop() some operations to call stack
        
        - Javascript is a single-threading language that can be non-blocking
            +, Javascript only has 1 call stack > single threaded 
            +, Asynchronous programming: some instructions take a while to be 
            execute > need to move on to execute other instructions and put it 
            somewhere for it to complete loading so other instruction can be executed
            > non-blocking

    b. Promises: 
        - Promise: 
            +, is an object to keep track about whether
            a certain event is happened already or not
            +, Determines what happens after the event 
            happened

        - A Promise is in one of these states:
            +, pending: initial state, neither fulfilled nor rejected.
            +, fulfilled: meaning that the operation was completed successfully.
            +, rejected: meaning that the operation failed.
    
    c. Promise vs Fetch API vs Async Await: 
        - See code in ./Promises

        



- Opportunity to Professionally develop products with
    stricter standards 
- Improve skills to advance career
- Get more valuable co-working connections