import styles from "./style.module.scss";
export default function SignInCTA() {
  return (
    <div className={styles.signin_cta_wrapper}>
      <div className={styles.cta_content}>
        <p className="text-xs text-black font-AmazonEmberMedium pb-2">
          See personalized recommendations
        </p>
        <button className={styles.signin_cta_btn}>Sign in</button>
        <p className="text-xs text-black font-AmazonEmberMedium pt-2 font-light">
          New customer?
          <span className="text-link-primary hover:cursor-pointer">
            Start here.
          </span>
        </p>
      </div>
    </div>
  );
}
