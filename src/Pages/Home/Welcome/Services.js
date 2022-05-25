import React from 'react';
const Services = () => {
    return (
        <div>
            <h2 className="text-3xl text-own text-center py-5 text-accent font-bold">OUR SERVICES</h2>
            <div>
                <p className="text-center text-red-600"><b>***</b> Sovereign is an iso 9001 : 2008 certified company serving the wide range of bicycle parts,Motorcycle parts, <br /> Complete Bicycle & Fasteners & other items. we are the BD largest manufacturer of bicycle parts.</p>
                <div className="hero text-white">
                    <div className="hero-content flex-col lg:flex-row-reverse bg-gray-300 px-10 rounded-lg border-2 shadow">
                        <div className="lg:px-48 my-5">
                            <div className="flex justify-center items-center bg-neutral rounded-lg px-10">
                                <img class="mask mask-hexagon w-24 bg-white" src="https://sovereignexports.com/images/icons/bike.png" alt='' />
                                <h1 className="px-5">BICYCLE SPARE PARTS</h1>
                            </div>
                            <div className="flex justify-center items-center bg-neutral rounded-lg my-2">
                                <img class="mask mask-hexagon w-24 bg-white" src="https://sovereignexports.com/images/icons/bicycle-fork.png " alt='' />
                                <h1 className="px-5">COMPLETE BICYLE</h1>
                            </div>
                            <div className="flex justify-center items-center bg-neutral rounded-lg">
                                <img class="mask mask-hexagon w-24 bg-white" src="https://sovereignexports.com/images/icons/tools.png" alt='' />
                                <h1 className="px-5">FASTNERS & OTHER ITEMS</h1>
                            </div>
                            <div className="flex justify-center items-center bg-neutral rounded-lg my-2">
                                <img class="mask mask-hexagon w-24 bg-white " src="https://sovereignexports.com/images/icons/clutch-disc.png" alt='' />
                                <h1 className="px-5">MOTORCYCLE PARTS</h1>
                            </div>
                        </div>
                        <img className="max-w-sm rounded-lg shadow-2xl bg-neutral" src="https://sovereignexports.com/images/logo-red.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;