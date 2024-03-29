import { useState } from 'react'
import styles from './style.module.scss'
import Image from "next/image";
import { Images } from '../../public/assests/images';
import strings from '../../string.json'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import CreateAccount from './CreateAccount';

export default function Signin() {
    const footerLink = ['Conditions of use', 'Privacy Notice', 'Help']
    const [hiddenLinks, setHiddenLinks] = useState(false);
    const [showSignin, setShowSignin] = useState(true);
    return (
        <div className={styles.singin_wrapper}>
            <div className={styles.logo_box}>
                <Image
                    src={Images.logoWithIn}
                    alt="amazon_logo_on_signin"
                    className="w-28"
                />
            </div>
            {showSignin ? (
                <div className={styles.signin_box}>
                    <h1 className={styles.signin_heading}>Sign in</h1>
                    <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                        {strings.sign_in.lable}
                    </label>
                    <input type='text' className={styles.singin_input} />
                    <button className={styles.continue_btn}>{strings.Continue}</button>
                    <p className='text-12px my-2'>By continuing, you agree to Amazon&apos;s <span className={styles.span_link}> Conditions of Use </span>and <span className={styles.span_link}>Privacy Notice.</span></p>
                    <p className={styles.need_help} onClick={() => setHiddenLinks(!hiddenLinks)} >
                        {hiddenLinks ? <AiFillCaretDown size={"0.5rem"} className={styles.downArrowIcon} /> :
                            <AiFillCaretRight size={"0.5rem"} className={styles.downArrowIcon} />
                        }
                        Need help?
                    </p>
                    {hiddenLinks ?
                        <div className={styles.hidden_box}>
                            <p>Forgot Password</p>
                            <p>Other issues with sign-in</p>
                        </div> : ""}
                </div>
            )
                : (
                    < CreateAccount control={setShowSignin} />
                )

            }

            <div className={styles.create_account_box}>
                {showSignin && <div className='flex items-center mb-3 w-full'>
                    <div className='flex items-center'>
                        <div className='border-t w-[6.5rem] h-1'></div>
                        <span className='text-xs text-gray-850 mx-3' style={{ color: "#767676" }}>New to Amazone?</span>
                        <div className='border-t w-[6.5rem] h-1'></div>
                    </div>
                </div>}


                <div className={styles.create_account_btn}>
                    {showSignin &&
                        <button className={styles.btn} onClick={() => setShowSignin(false)}>
                            Create your Amazon account</button>}
                </div>
            </div>
            <div className={styles.signin_footer}>
                {footerLink.map((item, index) => {
                    return <div key={index} className={styles.signin_footer_links}><li>{item}</li></div>
                })}
            </div>
            <p className={styles.bottom_text}>{strings.sign_in.bottom_footer_text}</p>
        </div>
    )
}