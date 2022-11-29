import styles from './style.module.scss'
export default function UpperFooter() {
    const locations = ["Australia", "Brazil", "Canada", "China", "France", "Germany", "Italy", "Japan", "Mexico", "Netherlands", "Poland", "Singapore", "Spain", "Turkey", "United Arab Emirates", "United Kingdom", "United States"]
    return (<div className={styles.upper_footer_wrapper}>
        <div className='w-full text-center bg-thirdColor'><button className={styles.back_to_top_btn}>Back to top</button></div>
        {/* // location data  */}
        <div className='flex w-full justify-center items-center  '>
            <div className='flex py-4 w-3/5 flex-wrap justify-center font-AmazonEmberMedium'>
                {locations.map((i) => {
                    return <li className='list-none pr-4 text-12px text-gray-300'>{i}</li>
                })}
            </div>
        </div>
    </div>)
}