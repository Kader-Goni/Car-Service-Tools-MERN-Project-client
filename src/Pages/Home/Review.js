import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ReviewCard from './ReviewCard';

const Review = () => {
    const {data: reviews, isLoading} = useQuery('review', () => fetch('https://quiet-reef-68495.herokuapp.com/review', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center my-8'>Our Happy Clients Review</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    reviews?.slice(0, 8).map(review => <ReviewCard
                        key={review._id}
                        review={review}
                        ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Review;