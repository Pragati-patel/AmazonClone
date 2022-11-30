import styles from './style.module.scss'
export default function BottomFooter() {
    const bottomLinks = [
        { "item": "Conditions of use & sale" },
        { "item": "Privacy Notice" },
        { "item": "Interest-Based Ads" },
    ]
    const linksData = [
        { "ui1_li1": "AbeBooks", "ui1_li2": "Books, art", "ui1_li3": "& collectibles", 'ui2_li1': "Shopbop", 'ui2_li2': "Designer", 'ui2_li3': 'Fashion Brands' },
        { "ui1_li1": "Amazon Web Services", "ui1_li2": "Scalable Cloud", "ui1_li3": "Computing Services", 'ui2_li1': "Amazon Business", 'ui2_li2': "Everything For", 'ui2_li3': 'Your Business' },
        { "ui1_li1": "Audible", "ui1_li2": "Download", "ui1_li3": "Audio Books", 'ui2_li1': "	Prime Now", 'ui2_li2': "2-Hour Delivery", 'ui2_li3': 'on Everyday Items' },
        { "ui1_li1": "DPReview", "ui1_li2": "Digital", "ui1_li3": "Photography", 'ui2_li1': "Amazon Prime Music", 'ui2_li2': "90 million songs, ad-free", 'ui2_li3': 'Over 15 million podcast episodes' },
        { "ui1_li1": "	IMDb", "ui1_li2": "Movies, TV", "ui1_li3": "& Celebrities", 'ui2_li1': "", 'ui2_li2': "", 'ui2_li3': '' }
    ]
    
    return (<div className={styles.bottom_footer_wrapper}>
        {/* //links data  */}
        <div className={styles.bottom_footer_inner}>
            <div className=' flex justify-between'>
                {linksData.map((item) => {
                    return (

                        <div className={styles.link_box_wrap}>
                            <ul className='flex flex-col mb-4 hover:cursor-pointer hover:underline hover:decoration-gray-300'>
                                <li className='text-gray-300 text-11px font-AmazonEmberMedium'>{item.ui1_li1}</li>
                                <li className='text-gray-400 text-10px '>{item.ui1_li2}</li>
                                <li className='text-gray-400 text-10px'>{item.ui1_li3}</li>
                            </ul>
                            <ul className='flex flex-col hover:cursor-pointer hover:underline hover:decoration-gray-300'>
                                <li className='text-gray-300 text-11px font-AmazonEmberMedium'>{item.ui2_li1}</li>
                                <li className='text-gray-400 text-10px'>{item.ui2_li2}</li>
                                <li className='text-gray-400 text-10px'>{item.ui2_li3}</li>
                            </ul>
                        </div>
                    )

                })}
            </div>

            {/* //most bottom footer  */}
            <div className={styles.bottom_footer_links}>
                <ul className='flex'>
                    {bottomLinks.map((i) => (<li>{i.item}</li>))}
                </ul>
                <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
    </div>)
}