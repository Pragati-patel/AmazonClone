import styles from './SearchFeild.module.scss';

export default function SearchFeild() {
    return (
        <div className={styles.SearchFeild_wrapper}>
            <form className='flex'>
                <div className={styles.nav_left}>All</div>
                <div className={styles.nav_fill}>
                    <input className={styles.search_input} type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder=""  dir="auto" tabindex="0" aria-label="Search" spellcheck="false"/>
                </div>
                <div className={styles.nav_right}>
                    icon
                </div>
            </form>
        </div>
    )
}