import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rating from '@mui/material/Rating';
import * as React from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import styles from './style.module.scss'

export default function MultiCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 6 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const [value, setValue] = React.useState(4);

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group absolute flex justify-between w-full">
                <button className={currentSlide === 0 ? 'disable' : 'flex'} onClick={() => previous()}>
                    <div className='border border-gray-450 rounded-lg px-[0.3rem] py-[0.5rem] bg-white' style={{ boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)" }}><FiChevronLeft size={"1.5rem"} /></div>
                </button>
                <button className='flex ' onClick={() => next()} >
                    <div className='border border-gray-450 rounded-lg  px-[0.3rem] py-[0.5rem] bg-white' style={{ boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)" }}><FiChevronRight size={"1.5rem"} /></div>
                </button>
                {/* <button onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </button> */}
            </div>
        );
    };

    return (
        <div className='w-full bg-white my-8 py-12 border-t border-gray-300 pt-4'>
            <div className='w-[95%] flex justify-between m-auto '>
                <p className='flex text-lg font-AmazonEmberMedium font-bold'>Customers who viewed items in your browsing history also viewed</p>
                <p className='flex text-14px font-AmazonEmberMedium'>
                  <span className='border-r border-gray-300 pr-3 mr-3  '>
                      page 1 of 8
                    </span>
                    <span className='text-link-primary cursor-pointer'>Start over</span>
                </p>
            </div>
            <div className='w-[95%] mx-auto'>
                <Carousel arrows={false} customButtonGroup={<ButtonGroup />}
                    responsive={responsive} infinite={true} sliderClass={`${styles.demo}`}
                >
                    {items.map((index, item) => {
                        return <div key={index} className='flex flex-col py-2 mx-5 w-[160px]'>
                            <img className='w-full' src='https://images-eu.ssl-images-amazon.com/images/I/71-3Gw+9KCL._AC_UL160_SR160,160_.jpg' alt='image'/>
                            <h1 className='text-sm font-AmazonEmberMedium text-link-primary'>MSI Gaming GF63 Thin, Intel 11th Gen. i7-11800H, 40CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 10...</h1>
                            <p className='text-14px'> <Rating className='text-lg' name="read-only" value={value} readOnly /></p>
                            <p className='text-[17px] font-AmazonEmberMedium text-black-text'>78,980.00</p>
                            <p className='text-12px font-AmazonEmberMedium text-black-text'>Get it by <b>Thursday, December 8</b></p>
                            <p className='text-12px font-AmazonEmberMedium font-extralight text-black-text'>FREE Delivery over ₹499. Fulfilled by Amazon.</p>
                        </div>
                    })}


                </Carousel>
            </div>
        </div>
    )

}