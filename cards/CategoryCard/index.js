import styles from './style.module.scss'
import Image from 'next/image'
import { Images } from '../../public/assests/images'
import strings from '../../string.json'

export default function CategoryCard() {
    return (<div className={styles.category_card_wrapper}>
        <h1 className={styles.category_heading}>Props.heading</h1>

        <div className={styles.sub_category_row}>
            <div className={styles.sub_category_box}>
                <Image src={Images.homeImprovment1} />
                <p className={styles.sub_category_heading}>
                    {strings.Category.home_improvment.sub_category_1}
                </p>
            </div>

            <div className={styles.sub_category_box}>
                <Image src={Images.homeImprovment2} />
                <p className={styles.sub_category_heading}>
                    {strings.Category.home_improvment.sub_category_2}
                </p>
            </div>
        </div>

        <div className={styles.sub_category_row}>
            <div className={styles.sub_category_box}>
                <Image src={Images.homeImprovment3} />
                <p className={styles.sub_category_heading}>
                    {strings.Category.home_improvment.sub_category_3}
                </p>
            </div>
            <div className={styles.sub_category_box}>
                <Image src={Images.homeImprovment4} />
                <p className={styles.sub_category_heading}>
                    {strings.Category.home_improvment.sub_category_4}
                </p>
            </div>
        </div>

        <button className={styles.expand_category}>{strings.see_more}</button>
    </div>)
}