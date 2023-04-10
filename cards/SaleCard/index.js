import styles from './style.module.scss'
import Image from 'next/image'
import {Images} from '../../public/assests/images'
import strings from '../../string.json'
export default function SaleCard(){
    return(
        <div className={styles.sale_card_wrapper}>
            <h1 className={styles.category_heading}>Up to 60% off | Professional tools & more</h1>
            <div className={styles.sale_banner}>
                <Image src={Images.saleProductWatch}/>
            </div>
        <button className={styles.expand_category}>{strings.see_more}</button>

        </div>
    )
}