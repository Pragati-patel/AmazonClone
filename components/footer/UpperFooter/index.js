import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '../../../public/assests/images'
export default function UpperFooter() {
    const locations = ["Australia", "Brazil", "Canada", "China", "France", "Germany", "Italy", "Japan", "Mexico", "Netherlands", "Poland", "Singapore", "Spain", "Turkey", "United Arab Emirates", "United Kingdom", "United States"]

    const info = [
        { heading: "Get to Know Us", list: ["About Us", "Careers", "Press Releases", "Amazon Science"] },
        {heading:"Connect with Us", list:["Facebook","Twitter","Instagram"]},
        {heading:"Make Money with Us", list:["Sell on Amazon","Sell under Amazon Accelerator","Amazon Global Selling","Become an Affiliate","Fulfilment by Amazon","Advertise Your Products","Amazon Pay on Merchants"]},
        {heading:"Let Us Help You", list:["COVID-19 and Amazon","Your Account","Returns Centre","100% Purchase Protection","Amazon App Download","Amazon Assistant Download","Help"]},

    ]



    return (<div className={styles.upper_footer_wrapper}>
        <div className='w-full text-center bg-thirdColor'><button className={styles.back_to_top_btn}>Back to top</button></div>

        <div className={styles.info_section}>
            <div className={styles.info_inner_row}>
                {info.map((i) => {
                    return (
                        <div className='flex flex-col'>
                            <h1>{i.heading}</h1>
                            <p>{(i.list).map(i => {
                                    return (<li>{i}</li>)

                                })}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>





        {/* // location data  */}
        <div className='flex flex-col w-full justify-center items-center py-4 '>
            <div className={styles.logo_row}>
                <div><Image src={Images.amazonLogo} className="w-28" /></div>
                <div>English</div>
            </div>

            <div className={styles.location_row}>
                {locations.map((i) => {
                    return <li className={styles.country_name}>{i}</li>
                })}
            </div>
        </div>
    </div>)
}