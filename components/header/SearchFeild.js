import styles from './SearchFeild.module.scss';

export default function SearchFeild() {
    return (
        <div className={styles.SearchFeild_wrapper}>
            <form>
                <div className={styles.nav_left}>All</div>
                <div className={styles.nav_fill}>
                    <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search" spellcheck="false"/>
                </div>
                <div className={styles.nav_right}>
                    icon
                </div>
            </form>
        </div>
    )
}