
import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import TravelPage2 from '../travelPage/TravelPage2';
import { Link, useLoaderData } from 'react-router-dom';
import HomeCard from './HomeCard/HomeCard';
import TravelerReview from './TravelerReview/TravelerReview';
import useTitle from '../../Hooks/Hooks';









const Home = () => {
    const places = useLoaderData()

    useTitle('Home')
    

    
    

  
   
  
   
 
    
   
    
    

  
    return (
        <div>
        <HeroSection></HeroSection>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-5 gap-5'>
            {
               places.map(place => <HomeCard key={place._id} place={place}></HomeCard>)
            }
        </div>
        <div className='flex justify-center'>

           <Link to='/allPlace'><button    className="text-white mt-10 shadow-xl  hover:bg-transparent inline-block rounded-2xl hover:px-14 duration-300 transition border hover:border-orange-300 bg-orange-300 py-2 px-7 text-base font-medium  hover:text-orange-300 ">View All</button></Link>

        </div>
        <TravelPage2></TravelPage2>
        <TravelerReview></TravelerReview>
       
    </div>
   
    );
};

export default Home;