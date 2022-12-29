import styles from '../Signin/style.module.scss'
import Image from "next/image";
import { Images } from '../../public/assests/images';
import strings from '../../string.json'
import { AiFillCaretDown, AiFillCaretRight } from 'react-icons/ai'
import { BsInfo } from 'react-icons/bs'
import { useRouter } from 'next/navigation';


export default function Register() {
    const router= useRouter();
    const footerLink = ['Conditions of use', 'Privacy Notice', 'Help']

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
                <h1 className={styles.signin_heading}>Create Account</h1>
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.your_name}
                </label>
                <input type='text' className={styles.singin_input} placeholder='First and last name' />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.mobile_number}
                </label>
                <input type='number' className={styles.singin_input} placeholder="Mobile number" />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.email}
                </label>
                <input type='email' className={styles.singin_input} />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.password}
                </label>
                <input type='password' className={styles.singin_input} placeholder="At least 6 characters" />

                <p className='flex text-12px items-center'><BsInfo color='#0066c0' size={'1.2rem'} />
                    Passwords must be at least 6 characters</p>

                <p className='text-12px my-2  '>{strings.create_account.info}</p>
                <button className={styles.continue_btn}>{strings.Continue}</button>
                <p className={styles.create_acc_info}>
                    Already have an account?
                    <span onClick={() => router.push('/Signin')}>
                        Sign in
                        <AiFillCaretRight size={"0.5rem"} className={styles.downArrowIcon} />
                    </span>
                </p>
                <p className={styles.create_acc_info} style={{ marginTop: "0" }}>Buying for work?
                    <span>
                        Create a free business account<AiFillCaretRight size={"0.5rem"} className={styles.downArrowIcon} />  </span>
                </p>
                <p className='text-12px my-2 mt-4'>By continuing, you agree to Amazon's
                    <span className={styles.span_link}> Conditions of Use </span>
                    and
                    <span className={styles.span_link}>Privacy Notice.</span>
                </p>

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