import styles from '../StylesPages.module.scss'
import { Header } from '../../components/Header/Header'
import { HeaderPages } from '../HeaderPages/HeaderPages'
// import { FooterForm } from '../../components/Footer/Footer'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { InputPassword } from '../ComponentsForm/InputsForm/InputPassword'
import { useRef } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


export const SignInPage = () =>{
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() =>{
        inputRef.current?.focus()
    })
    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Sign In'}/>
            <form className={styles.pageForm}>
                <div className={styles.blockInputs}>
                    <InputEmail lable={'Email'} ref1={inputRef}/>
                    <InputPassword lable={'Password'}/>
                    <NavLink className={styles.forgotPasswordButton} to='/resetpasswordpage'>Forgot password?</NavLink>
                </div>
                <ButtonComplete link='/'>Sign In</ButtonComplete>
                <div className={styles.quastionString}>
                    Don’t have an account? <NavLink style={{textDecoration: 'none'}} to='/signup'>Sign Up</NavLink>
                </div>
            </form>
        </div>
        </>
    )
}