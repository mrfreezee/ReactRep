import { useState, useReducer } from "react"
import style from './BurgerIcon.module.scss'
import { useSelector } from "react-redux"
import { selectMenuState } from "../../../../store/Menu/selectors"
import { useDispatch } from 'react-redux'
import { setOpenMenuAction, setCloseMenuAction } from '../../../../store/Menu/actions'

type Props = {
    open: boolean
    onClick1: () => void
}


export const BurgerIcon = () => {

    const dispatch = useDispatch()

    const {isOpen} = useSelector(selectMenuState)
    const openMenu = () => dispatch(setOpenMenuAction())
    const closeMenu = () => dispatch(setCloseMenuAction())

    return (
        <div className={style.burgerIcon} onClick={isOpen ? closeMenu : openMenu}>
            {
                isOpen ? (
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
