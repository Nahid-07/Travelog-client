import React from 'react';
import img1 from '../../../assets/bandorban.jpg';
import img2 from '../../../assets/longest-sea-beach-in.jpg';
import img3 from '../../../assets/Sajek-Valey.png';
import BannerItem from './BannerItems';

const bannerData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    }
    
]

const Banner = () => {
    return (
        <div className="carousel w-full py-5">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;