import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-accent">MILLONS BUSINESS TRUST US</h2>
            <div className="divider mx-28">-</div>
            <div className="grid text-center mx-20 py-20">
                <div className="stats shadow">

                    <div className="stat place-items-center text-white bg-slate-500">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">From January 1st to February 1st</div>
                    </div>

                    <div className="stat place-items-center text-white bg-green-500">
                        <div className="stat-title">Users</div>
                        <div className="stat-value text-secondary">4,200</div>
                        <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
                    </div>

                    <div className="stat place-items-center text-white bg-red-400">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                    <div className="stat place-items-center text-white bg-blue-400">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
                <div className="card  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Have any qustion about us,</h2>
                        <p>Don't hasited to contact us.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;