import React from 'react';
import { Galleria } from 'primereact/galleria';
import floorModel from "../res/floorModel.jpeg";
import bethanyRooftop from "../res/bethany_compressed.jpg";
import test from "../res/21-12-06 13-36-01 6727.jpeg";
import test2 from "../res/rooftop-1.jpeg";
import test3 from "../res/rooftop-2.jpeg";
import test4 from "../res/23-01-24 15-36-03 6733.jpeg";
import test5 from "../res/OutdoorUnit.jpeg";
import test6 from "../res/23-02-16 15-57-43 6732.jpeg";
import test7 from "../res/23-05-08 14-22-34 6765.jpeg";
import test9 from "../res/23-05-08 13-38-49 6764.jpeg";
import test10 from "../res/23-01-19 09-59-45 6735.jpeg";

function PrevWork() {

    const images = [
        {
            img: test3,
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            img: test2,
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            img: bethanyRooftop,
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            img: test4,
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            img: test5,
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            img: test6,
            alt: 'Description for Image 5',
            title: 'Title 5'
        },
        {
            img: test,
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            img: floorModel,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            img: test7,
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
        {
            img: test9,
            alt: 'Description for Image 6',
            title: 'Title 6'
        },
        {
            img: test10,
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
    ];

    const itemTemplate = (item) => {
        return <img src={item.img} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }


    return (
        <div id="prev-work" className='w-full py-6'>
            <h3 className="text-900 text-3xl font-bold text-center mb-6">Our Work</h3>
            <div className='flex justify-content-center align-items-center'>
                <Galleria value={images} numVisible={5} circular style={{ maxWidth: '640px' }}
                    showThumbnails={false} showItemNavigators showIndicators item={itemTemplate} className='border-0'/>
            </div>
        </div>
    )
}

export default PrevWork;