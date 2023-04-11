import './myNewGalleryStyles.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"// requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
export default function BannerCarousel() {
    return (<>
        <div className="relative">

            <Carousel autoPlay={true} interval={5000} showIndicators={false} showThumbs={false} showStatus={false} >
                <div >
                    <img src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg" alt='image-1' />
                </div>
                <div >
                    <img src="	https://m.media-amazon.com/images/I/61zM2eTlebL._SX3000_.jpg" alt='image-2' />
                </div>
                <div>
                    <img src="	https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" alt='image-3' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png" alt='image-4' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/51qBj3502YL._SX3000_.jpg" alt='image-5' />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/91pOL0YtqCL._SX3000_.jpg" alt='image-6' />
                </div>
            </Carousel>
            <div className='absolute bottom-0 right-0 z-10 border-1 border-red-700 h-[245px] w-full' style={{
                background: `linear-gradient(-180deg, rgba(234, 237, 237, 0), #E3E6E6)`
            }}></div>
        </div>


    </>
    )
}