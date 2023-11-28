import style from './BurgerMenu.module.scss'
import Style from '../User/User.module.scss'
import { UserComponent } from '../User/User'

import { useState } from "react"


type Props = {
    open: boolean
}


const data = ['Home', 'Add post']

export const BurgerMenu = (props: Props) => {
    if (!props.open) {
        return null
    }

    return (
        <div className={style.burgerMenuWrapper}>
            <ul className={style.burgerList}>
                <li><UserComponent/></li>
                {
                    data.map((item, index) => (
                        <li className={style.burgerListItem} key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

