import CategoryCard from '../../cards/CategoryCard'
import SignInCard from '../../cards/SignInCard'
import SaleCard from '../../cards/SaleCard'
import styles from './style.module.scss'
import SingleProductCard from '../../cards/SingleProductCard'

export default function CategorySection() {
    const cards = [1, 2, 3, 4]
    return (<>
        <div className={styles.category_section_wrap}>
            {cards.map((card, index) => {
                return <div key={index} className={styles.card_wrap}>
                    {index === 3 ?
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
        <div className={styles.category_section_wrap}>
            {cards.map((card, index) => {
                return <div key={index} className={styles.card_wrap}>
                    {index === 2 ?
                        <SaleCard />:<CategoryCard />}

                </div>
            })}
        </div>
    </>
    )
}