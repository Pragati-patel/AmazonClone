import SearchFeild from '../SearchFeild'
import styles from './style.module.scss'
import Image from 'next/image';
import { Images } from '../../../public/assests/images'
export default function TopHeader(){
    return(
    <div className={styles.top_header_wrapper}>
    <div className={styles.top_header_box}>
    <Image src={Images.amazonLogo} />
        
    </div>
    <div className={styles.top_header_box}>
        <p className={styles.normal_text}>Hello</p>
        <p className={styles.bold_text}>Select your address</p>
    </div>
    <div className={styles.top_header_box3}><SearchFeild/></div>
    <div className={styles.top_header_box}>Language</div>
    <div className={styles.top_header_box}>
        <p className={styles.normal_text}>Hello, sign in</p>
        <p className={styles.bold_text}>Account & Lists</p>
    </div>
    <div className={styles.top_header_box}>
        <p className={styles.normal_text}>Retruns</p>
        <p className={styles.bold_text}>& Orders</p>
    </div>
    <div className={styles.top_header_box}>Cart</div>
    </div>
    )
}