import { InputPassword } from '../ComponentsForm/InputsForm/InputPassword'
import styles from '../StylesPages.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'


export const NewPasswordPage = () =>{
    const inputRef = useRef<HTMLInputElement>(null)

    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'New password'}/>
            <form className={styles.pageForm}>
                <div className={styles.blockInputs}>
                    <InputPassword lable={'Password'}/>
                    <InputPassword lable={'Confirm password'}/>
                </div>
                <ButtonComplete link=''>Set password</ButtonComplete>
                
            </form>
        </div>
        </>
    )
}