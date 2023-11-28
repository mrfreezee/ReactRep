import { useState } from "react"
import style from './BurgerIcon.module.scss'



type Props = {
    open: boolean
    onClick1: () => void
}

export const BurgerIcon = (props: Props) => {
    return (
        <div onClick={props.onClick1}>
            {
                props.open ? (
                    <div className={style.burgSpan2}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className={style.burgSpan}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                )
            }
        </div>
    )
}
