import './myNewGalleryStyles.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
export default function BannerCarousel() {
    return (<>
    <div className='try'></div>
        <div className="relative">
            
            <Carousel autoPlay={true} interval={5000} showIndicators={false} showThumbs={false} showStatus={false} >
                <div >
                    <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt='image-1'/>
                </div>
                <div >
                    <img src="	https://m.media-amazon.com/images/I/61zM2eTlebL._SX3000_.jpg" alt='image-2'/>
                </div>
                <div>
                    <img src="	https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" alt='image-3' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png" alt='image-4' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg" alt='image-5'/>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91pOL0YtqCL._SX3000_.jpg" alt='image-6'/>
                </div>
            </Carousel>
             <div className='absolute w-full bg-["linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))"]' >
            </div> 
        </div>
    </>
    )
}