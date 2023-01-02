import styles from './style.module.scss'
export default function SignInCard() {
    return (
        <div className={styles.signin_crad_wrap}>
            <h1 className={styles.heading}>Sign in for your best experience</h1>
            <button className={styles.button}>Sign in securely</button>
        </div>
    )
}