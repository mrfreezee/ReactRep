import styles from '../StylesPages.module.scss'
import { Header } from '../../components/Header/Header'
import { HeaderPages } from '../HeaderPages/HeaderPages'
// import { FooterForm } from '../../components/Footer/Footer'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { InputPassword } from '../ComponentsForm/InputsForm/InputPassword'


export const SignUpPage = () =>{
    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Sign Up'}/>
            <form className={styles.pageForm}>
                <div className={styles.blockInputs}>
                    <InputEmail lable={'Name'}/>
                    <InputEmail lable={'Email'}/>
                    <InputPassword lable={'Password'}/>
                    <InputPassword lable={'Confirm password'}/>
                </div>
                <ButtonComplete name={'Sign Up'}/>
                <div className={styles.quastionString}>
                    Don’t have an account? SignIn
                </div>
            </form>
        </div>
        </>
    )
}