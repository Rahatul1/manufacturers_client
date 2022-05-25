import React from 'react';
import Footer from '../../Shared/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessBusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';
import Review from '../Review/Review';
import Welcome from '../Welcome/Welcome';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Review></Review>
            <Welcome />
            <Footer />
        </div>
    );
};

export default Home;