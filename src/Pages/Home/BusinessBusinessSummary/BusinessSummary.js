import React from 'react';
import { BsFlagFill, BsFillPeopleFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";

const BusinessSummary = () => {
    return (
        <div>
            <h2 className="text-3xl text-center text-accent">MILLONS BUSINESS TRUST US</h2>
            <div className="divider mx-28">-</div>
            <div className="grid text-center mx-20 py-10">

                <div className="card  shadow-xl">
                    <div className="stats shadow">

                        <div className="stat place-items-center text-white bg-slate-500">
                            <div className="stat-title"><BsFlagFill /></div>
                            <div className="stat-value">55+</div>
                            <div className="stat-desc">Countries</div>
                        </div>

                        <div className="stat place-items-center text-white bg-green-500">
                            <div className="stat-title"><FaShoppingCart /></div>
                            <div className="stat-value text-secondary">2589+</div>
                            <div className="stat-desc text-secondary">Complete delivery</div>
                        </div>

                        <div className="stat place-items-center text-white bg-red-400">
                            <div className="stat-title"><BsFillPeopleFill /></div>
                            <div className="stat-value">1832+</div>
                            <div className="stat-desc">Happy Clients</div>
                        </div>
                        <div className="stat place-items-center text-white bg-blue-400">
                            <div className="stat-title flex text-yellow-600">
                                <BsFillEyeFill />
                            </div>
                            <div className="stat-value">3173+</div>
                            <div className="stat-desc">Follower</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title">Have any qustion about us,</h2>
                        <p>Don't hasited to contact us.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary btn-xs">More Informations</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;