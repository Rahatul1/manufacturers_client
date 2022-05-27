import React from 'react';
import banner from '../../../imsge/img1.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full" style={{ background: `url(${banner})`, backgroundSize: "cover" }}>
                <div className="hero min-h-screen">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase text-accent"> <b className="text-red-500">-Hello-</b> sovereign exports</h1>
                            <p className="mb-5 text-white text-xl">Our goal is to provide high-quality products & services to customers around the world. To do so we must be able to ensure that our processes meet the highest standards. Sovereign Exports are ISO 9001:2000 certified.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;