import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-3xl text-accent text-center py-5">Blogs now</h2>
            <div className="card  bg-base-100 shadow-xl lg:mx-28">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <h2><b>Ans:</b></h2>
                    <li>Keeping component state local where necessary..</li>
                    <li>Memoizing React components to prevent unnecessary re-renders..</li>
                    <li>Code-splitting in React using dynamic import ().</li>
                    <li>Windowing or list virtualization in React.</li>
                    <li> Lazy loading images in React.</li>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl lg:mx-28 my-10">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <h2><b>Ans:</b></h2>
                    <li>Hooks.</li>
                    <li>React Context API.</li>
                    <li>Apollo Link State.</li>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl lg:mx-28">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <h2><b>Ans:</b></h2>
                    <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
                    <h2><b>*</b> All JavaScript objects inherit properties and methods from a prototype:</h2>
                    <li>Date objects inherit from Date.prototype.</li>
                    <li>Array objects inherit from Array.prototype.</li>
                    <li>Player objects inherit from Player.prototype.</li>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl lg:mx-28 my-10">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <h5><b>What is a unit test?</b></h5>
                    <li> This is a type of testing which is done by software developers in which the smallest testable module of an application - like functions, procedures or interfaces - are tested to ascertain if they are fit to use. This testing is done to ensure that the source code written by the developer meets the requirement and behaves in an expected manner.</li>
                    <h4><b>Why should I write unit tests?</b></h4>
                    <li> One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code . Higher quality individual components create overall system resilience. Thus, the result is reliable code. Unit tests also change the nature of the debugging process</li>
                </div>
            </div>


        </div>
    );
};

export default Blogs;