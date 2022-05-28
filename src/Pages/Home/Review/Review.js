import React, { useEffect, useState } from 'react';

const Review = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch("https://infinite-castle-74205.herokuapp.com/reviews")
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div>
            <h2 className="text-accent text-3xl text-center py-5">User Review</h2>
            {
                review.map(r => <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{r.name}</h2>
                        <p>{r.rating}</p>
                        <p>{r.comment}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Review;