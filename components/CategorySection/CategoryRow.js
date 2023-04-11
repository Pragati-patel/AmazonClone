import CategoryCard from '../../cards/CategoryCard'
import SaleCard from '../../cards/SaleCard'
import styles from './style.module.scss'

export default function CategoryRow({ cards,singleCardIndex }) {
    return (<>
    <div className="flex p-4 w-full bg-[#e7e7e7] mb-4" style={{background:"#e7e7e7"}}>
            {cards.map((card, index) => {
                return <div key={index} className="mx-2">
                    {index === singleCardIndex ?
                        <SaleCard />:<CategoryCard />}

                </div>
            })}
        </div> 
    </>)
}