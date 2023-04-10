import styles from './style.module.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Image from 'next/image';
import { Images } from '../../public/assests/images';


export default function ImagesMultiCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const items = [Images.D1, Images.D2, Images.D3, Images.D4, Images.D5, Images.D6, Images.D7, Images.D8, Images.D2, Images.D4, Images.D6, Images.D8]
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group absolute flex justify-between w-full my-8">
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

        <div className='w-full bg-white py-12 px-4'>
            <div className='w-[95%] flex m-auto '>
                <p className='flex text-xl font-AmazonEmberMedium font-bold pb-4'>Customers who viewed items in your browsing history also viewed</p></div>


            <div className='w-[95%] mx-auto'>
                <Carousel arrows={false} customButtonGroup={<ButtonGroup />}
                    responsive={responsive} infinite={true} sliderClass={`${styles.demo}`}
                >

                    {items.map(( item,index) => {
                        return (<div key={index} className='flex py-2'>
                            {/* <Image src={Images.D1} /> */}
                            <Image src={item} />
                        </div>)
                    }
                    )
                    }
                </Carousel>;
            </div>
        </div>
    )
}