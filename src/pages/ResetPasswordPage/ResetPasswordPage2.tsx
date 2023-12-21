import styles from '../StylesPages.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'


export const ResetPasswordPage2 = () =>{
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() =>{
        inputRef.current?.focus()
    })


    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Reset password'}/>
            <form className={styles.pageForm}>
            <p>You will receive an email <span className={styles.emailBold}>example@gmail.com</span> with a link to reset your password!</p>
                <InputEmail lable={'Email'} ref1={inputRef}/>
                <ButtonComplete link='/'>Go to home</ButtonComplete>

            </form>
        </div>
        </>
    )
}