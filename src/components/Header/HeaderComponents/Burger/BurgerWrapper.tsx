import { useState } from "react"
import { BurgerIcon } from "./BurgerIcon"
import {BurgerMenu} from './BurgerMenu'
import style from './BurgerWrapper.module.scss'


export const BurgerWrapper = () =>{
    const [open, setOpen] = useState(false)

    const toogle = () => setOpen(!open)
    
    return(
        <div className={style.burgerWrapper}>
        <BurgerIcon open={open} onClick1={toogle}/>
        <BurgerMenu open={open}/>
        </div>
    )
}