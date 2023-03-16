import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className='text-center p-5 my-5 bg-sky-300 rounded-md'>
                <p className='text-xl font-bold'>What are the different ways to manage a state in a React application?</p>
                <p><span className='text-2xl font-semibold'>Answer: </span> 'useReducer' is an another option that can be used foe either
                    local or global state. It is similar in many ways to useState under the hood, although istead of
                    just an inisial state it accepts a reducer.The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies,
                    local storage, and IndexedDB. These are native browser technologies.
                    Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.</p>
            </div>
            <div className='text-center p-5 my-5 bg-sky-300 rounded-md'>
                <p className='text-xl font-bold'> How does prototypical inheritance work?</p>
                <p><span className='text-2xl font-semibold'>Answer: </span>  Simply put, prototypical inheritance refers to the ability to access
                    object properties from another object. We use a JavaScript prototype to add new properties
                    and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us
                    to reuse the properties or methods from one
                    JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='text-center p-5 my-5 bg-sky-300 rounded-md'>
                <p className='text-xl font-bold'>  What is a unit test? Why should we write unit tests?</p>
                <p><span className='text-2xl font-semibold'>Answer: </span> Unit testing is a software development process in which the smallest testable parts of an application, called units,
                    are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate
                    written code to test and determine if it works as intended.
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='text-center p-5 my-5 bg-sky-300 rounded-md'>
                <p className='text-xl font-bold'> React vs. Angular vs. Vue?</p>
                <p><span className='text-2xl font-semibold'>Answer: </span> React often requires extra modules and components, which keeps the core library small, but means there’s extra work
                    involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does,
                    though it does have a steeper learning curve for its core compared to React.Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared
                    to React. Vue can be easier to integrate into new or existing projects
                    and many feel its use of HTML templates along with JSX is an advantage.</p>
            </div>


        </div>
    );
};

export default Blog;