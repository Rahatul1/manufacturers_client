import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Lodding from "../Shared/Lodding";


const Addreview = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    const handleReview = (event) => {
        event.preventDefault();

    };
    if (loading) {
        return <Lodding />;
    }
    return (
        <>
            <div className="card w-1/2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl text-center text-accent">Add a review</h2>
                    <form onSubmit={handleReview}>
                        <div className="mb-3">
                            <input
                                className="mt-3 p-2 border-2 rounded-lg form-control"
                                value={user?.displayName}
                                type="text"
                                name="name"
                                id=""
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="mt-3 form-control p-2 border-2 rounded-lg"
                                type="text"
                                name="rating"
                                id=""
                                placeholder="Enter rating"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                className="mt-3 form-control p-2 border-2 rounded-lg"
                                type="text"
                                name="comment"
                                id=""
                                placeholder="Enter comment"
                            />
                        </div>

                        <input
                            className="mt-3 btn btn-primary"
                            type="submit"
                            value="Add review"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Addreview;

