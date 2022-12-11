import styles from './style.module.scss'
import Image from "next/image";
import { Images } from '../../public/assests/images';

export default function Signin() {
    const footerLink=['Conditions of use','Privacy Notice','Help']
    return (
        <div className={styles.singin_wrapper}>
            <div className={styles.logo_box}>
                <Image
                    src={Images.logoWithIn}
                    alt="amazon_logo_on_signin"
                    className="w-28"
                />
            </div>
            <div className={styles.signin_box}>
                <h1 className={styles.signin_heading}>Sign in</h1>
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>Email or mobile phone number</label>
                <input type='text' className={styles.singin_input} />
                <button className={styles.continue_btn}>Continue</button>
                <p className='text-12px my-2'>By continuing, you agree to Amazon's <span className='text-link-secondary'> Conditions of Use </span>and <span className='text-link-secondary'>Privacy Notice.</span></p>
                <p className={styles.need_help}>Need help?</p>
            </div>
            <div className={styles.create_account_box}>
                <div className='flex items-center mb-3 w-full'>
                    <p className='flex items-center'>
                        {/* <hr className='w-32' /> */}
                        <span className='text-xs text-gray-850 mx-3' style={{ color: "#767676" }}>New to Amazone?</span>
                        {/* <hr className='w-32' /> */}
                        </p>
                </div>
                <div className={styles.create_account_btn}><button className={styles.btn}>
                    Create your Amazon account</button></div>
            </div>
            <div className={styles.signin_footer}>
                {footerLink.map((item,index)=>{
                    return <div  key={index} className={styles.signin_footer_links}><li>{item}</li></div>
                })}
            </div>
                <p className='text-11px text-center text-[#555]  mt-2 mb-8'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
        </div>
    )
}