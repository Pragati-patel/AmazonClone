import styles from './style.module.scss'
import Image from "next/image";
import { Images } from '../../public/assests/images';
import strings from '../../string.json'

export default function CreateAccount(){
    return(
        <div className={styles.signin_box}>
             <h1 className={styles.signin_heading}>Create Account</h1>
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.your_name}
                    </label>
                <input type='text' className={styles.singin_input} />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.mobile_number}
                    </label>
                <input type='number' className={styles.singin_input} />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.email}
                    </label>
                <input type='email' className={styles.singin_input} />
                <label className='text-[13px] font-AmazonEmberMedium mt-2'>
                    {strings.create_account.password}
                    </label>
                <input type='password' className={styles.singin_input} />
                <p className='text-12px my-2'>{strings.create_account.info}</p>
                <button className={styles.continue_btn}>{strings.Continue}</button>
                
                <p className='text-12px my-2'>By continuing, you agree to Amazon's <span className='text-link-secondary'> Conditions of Use </span>and <span className='text-link-secondary'>Privacy Notice.</span></p>

        </div>
    )
}