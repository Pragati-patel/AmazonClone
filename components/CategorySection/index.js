import CategoryCard from '../../cards/CategoryCard'
import SaleCard from '../../cards/SaleCard'
import styles from './style.module.scss'

export default function CategorySection() {
    const cards = [1, 2, 3, 4]
    return (
        <div className={styles.category_section_wrap}>
            {cards.map((card,index) => {
                return <div key={index} className={styles.card_wrap}>
                    {index===3?<SaleCard/>:<CategoryCard />}
                    
                </div>
            })}
        </div>
    )
}