import styles from '../StylesPages.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { NavLink } from 'react-router-dom'

export const RegistrationConfirmation = () => {

    return (<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Registration Confirmation'} />
            <form className={styles.pageForm}>
                <p className={styles.textForm}>
                    Please activate your account with the activation<br/>
                    link in the email <span className={styles.emailBold}>example@gmail.com.</span><br/>
                    Please, check your email
                </p>
                <ButtonComplete><NavLink style={{textDecoration: 'none', color: 'white'}} to='/'>Go to home</NavLink></ButtonComplete>
            </form>
        </div>
    </>
    )
}