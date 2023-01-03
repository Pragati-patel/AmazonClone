import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '../../public/assests/images'

export default function SingleProductCard() {
    const heading = 'MSI Katana GF76, Intel 11th Gen. i5-11400H, 43CM FHD 144Hz Gaming Laptop (8GB/512GB NVMe SSD/Windows 11 Home/Nv  idia GTX1650 4GB GDDR6/Black/2.6Kg), 11SC-847IN'
    return (
        <div className={styles.product_card_wrap}>
            <Image src={Images.LaptopProductCardImg} />
            <p className={styles.product_card_heading}>{heading.slice(0, 65) + (heading.length > 65 ? "..." : "")}</p>
            <div className={styles.product_card_bottom_row}>
                <div className='flex'>

                    <h1>65,711</h1>
                    <Image src={Images.primeLogo} />
                </div>
                <button className={styles.shop_now_btn}>Shop now</button>
            </div>
        </div>
    )
}