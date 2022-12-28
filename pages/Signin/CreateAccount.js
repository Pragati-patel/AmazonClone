import styles from './style.module.scss'
import Image from "next/image";
import { Images } from '../../public/assests/images';
import strings from '../../string.json'
import { BsInfo } from 'react-icons/bs'
import { AiFillCaretRight } from 'react-icons/ai'
import { useEffect } from 'react';

export default function CreateAccount(showSignin) {
    useEffect(()=>{console.log(showSignin,"propsss")},[])
    return (
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
            <p className='flex text-12px items-center'><BsInfo color='#0066c0' size={'1.2rem'} />Passwords must be at least 6 characters</p>

            <p className='text-12px my-2  '>{strings.create_account.info}</p>
            <button className={styles.continue_btn}>{strings.Continue}</button>
            <p className={styles.create_acc_info}>
                Already have an account?  <span onClick={()=>{showSignin()}}>Sign in<AiFillCaretRight size={"0.5rem"} className={styles.downArrowIcon} /> </span></p>
            <p className={styles.create_acc_info} style={{marginTop:"0"}}>Buying for work?
                <span>
                    Create a free business account<AiFillCaretRight size={"0.5rem"} className={styles.downArrowIcon} />  </span></p>

                    
            <p className='text-12px my-2'>By continuing, you agree to Amazon's
                <span className='text-link-secondary'> Conditions of Use </span>
                and
                <span className='text-link-secondary'>Privacy Notice.</span></p>

        </div>
    )
}