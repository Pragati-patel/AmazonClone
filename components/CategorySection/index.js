import CategoryCard from '../../cards/CategoryCard'
import SaleCard from '../../cards/SaleCard'
import SignInCard from '../../cards/SignInCard'
import styles from './style.module.scss'
import SingleProductCard from '../../cards/SingleProductCard'

export default function CategorySection() {
    const cards = [1, 2, 3, 4]
    return (
        <div className={styles.category_section_wrap}>
            {cards.map((card, index) => {
                return <div key={index} className={styles.card_wrap}>
                    {index === 3 ?
                        // <SaleCard/>
                        <div className='flex flex-col w-[20rem]'>
                            <div>

                                <SignInCard />
                            </div>
                            <div className='mt-4 '>

                                <SingleProductCard />
                            </div>
                        </div>
                        :
                        <CategoryCard />}

                </div>
            })}
        </div>
    )
}