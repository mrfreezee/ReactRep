import styles from '../StylesPages.module.scss'
import { Header } from '../../components/Header/Header'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { InputPassword } from '../ComponentsForm/InputsForm/InputPassword'
import { NavLink } from 'react-router-dom'
import { useRef } from 'react'



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
                <ButtonComplete link='/registrationconfirmation'>Sign Up</ButtonComplete>
                <div className={styles.quastionString}>
                    Don’t have an account? <NavLink style={{textDecoration: 'none'}} to='/signin'>Sign In</NavLink>
                </div>
            </form>
        </div>
        </>
    )
}