import React from 'react';


const MyPortpolio = () => {
    return (
        <div>
            <h2 className="text-accent text-center text-3xl py-5">My Portpolio</h2>
            <div className="card w-full bg-gray-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-accent font-bold text-3xl">I am Rahat ul Islam.</h2>
                    <p> Add links of three of My projects</p>
                    <div className="text-xl">
                        <a href="https://find-a-tutor-526e2.web.app/"><b>My Project 1: </b></a>
                        <br />
                        <a href="https://warehouse-inventory-mana-95a43.web.app/"><b>My Project 2:</b> </a>
                        <br />
                        <a href="https://find-a-tutor-526e2.web.app/"><b>My Project 3:</b></a>
                    </div>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default MyPortpolio;