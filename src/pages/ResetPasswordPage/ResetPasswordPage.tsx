import styles from '../StylesPages.module.scss'
import { HeaderPages } from '../HeaderPages/HeaderPages'
import { ButtonComplete } from '../ComponentsForm/ButtonComplete/ButtonnComplete'
import { InputEmail } from '../ComponentsForm/InputsForm/InputEmail'
import { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'



export const ResetPasswordPage = () =>{
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() =>{
        inputRef.current?.focus()
    })


    return(<>
        <div className={styles.pageWrapper}>
            <HeaderPages name={'Reset password'}/>
            <form className={styles.pageForm}>
                <InputEmail lable={'Email'} ref1={inputRef}/>
                <ButtonComplete link='/resetpasswordpage2'>Reset</ButtonComplete>
            </form>
        </div>
        </>
    )
}