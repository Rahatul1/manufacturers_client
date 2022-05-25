import React from 'react';
// import ReactPlayer from 'react-player'

const Welcome = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-accent pt-5 font-bold">WELCOME SOVEREIGN</h2>
            <h3 className="text-xl pt-5 text-red-600 pl-5 text-center"><b>*</b> Complete Bicycle, Bicycle Spare Parts & Accessories Manufacture</h3>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://t4.ftcdn.net/jpg/01/67/14/15/360_F_167141573_NA08uS1X4oSSll2e6AzlXkdlRekjMpka.jpg" alt="" />
                    {/* <div className="lg-px-20">
                        <ReactPlayer class="rounded-lg shadow-2xl" control url="https://youtu.be/FGnlxE2Fawg" />
                    </div> */}
                    <div className="lg:px-16">
                        <h1 class="text-3xl font-bold">WE AIM TO PROVIDE YOU THE BEST QUALITY PRODUCTS</h1>
                        <p class="py-6">
                            At Sovereign, we are the leading Bicycle Parts manufacturers and traders of quality bicycles Since - 1994. Exports bicycle parts, motorcycle parts and other items worldwide. We take pride in our excellence in service and manufacturing, guaranteeing you complete satisfaction while building strong and long lasting relationships with you as a valuable consumer. Sovereign specialized in manufacturing, supplying and exporting Bicycle parts, Accessories. Worldwide presence in Brazil, Mexico, Argentina and in Italy, Poland Countries like Bangladesh and Sri Lanka.
                        </p>
                        <button class="btn btn-primary">More Information</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;