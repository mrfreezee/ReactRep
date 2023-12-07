import styles from '../StylesPages.module.scss'
import { Header } from '../../components/Header/Header'
import { HeaderPages } from '../HeaderPages/HeaderPages'
// import { FooterForm } from '../../components/Footer/Footer'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { InputPassword } from '../ComponentsForm/InputsForm/InputPassword'

export const SignInPage = () =>{
    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Sign In'}/>
            <form className={styles.pageForm}>
                <div className={styles.blockInputs}>
                    <InputEmail lable={'Email'}/>
                    <InputPassword lable={'Password'}/>
                    {/* <input type='button' value='Forgot password?' className={styles.forgotPasswordButton}/> */}
                    <a href='#' className={styles.forgotPasswordButton}>
                        Forgot password?
                    </a>
                </div>
                <ButtonComplete name={'Sign In'}/>
                <div className={styles.quastionString}>
                    Don’t have an account? SignUp
                </div>
            </form>
        </div>
        </>
    )
}