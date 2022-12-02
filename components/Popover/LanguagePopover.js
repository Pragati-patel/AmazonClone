import styles from './LanguagePopover.module.scss'
export default function LanguagePopover() {
    const languageList = [
        'हिन्दी - HI',
        'தமிழ் - TA',
        'తెలుగు - TE ',
        'ಕನ್ನಡ - KN ',
        'മലയാളം - ML ',
        'বাংলা - BN ',
        'मराठी - MR ',
    ]
    return (
        <div className={styles.langugae_popover_wrapper}>
            <div className={styles.langugae_popover_top}> English - EN</div>
            <div className={styles.langugae_popover_mid}>
                {languageList.map((item, index) => {
                    return (<div key={index} className={styles.language_row}>
                        <input type="radio" /><label className='text-14px pl-2' for="html">{item}</label>
                    </div>
                    )
                })}
                <p className='text-link-primary text-12px'>Learn more</p>
            </div>
            <div className={styles.langugae_popover_bottom}>
                <p>You are shopping on Amazon.in</p>
                <p className='pt-1 text-link-primary'>Change country/region</p>
            </div>
        </div>
    )
}