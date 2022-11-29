import styles from'./style.module.scss'
export default function BottomFooter() {
    const bottomLinks=[
        {"item":"Conditions of use & sale"},
        {"item":"Privacy Notice"},
        {"item":"Interest-Based Ads"},
]
    return(<div className={styles.bottom_footer_wrapper}>
        <div className={styles.bottom_footer_inner}>

        <div></div>
        <div className={styles.bottom_footer_links}>
        <li>{bottomLinks.map((i)=>i.item)}</li>
        <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
        </div>
    </div>)
}