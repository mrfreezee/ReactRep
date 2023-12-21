import style from './BurgerMenu.module.scss'
import { UserComponent } from '../User/User'
import { ThemeButtons } from './ThemeBtns/ThemeBtns'
import {  NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setOpenMenuAction, setCloseMenuAction } from '../../../../store/Menu/actions'
import { useSelector } from 'react-redux'
import { selectMenuState } from '../../../../store/Menu/selectors'

type Props = {
    open: boolean
    theme?: string
    changeTheme?: (theme: string) => void
}

export const BurgerMenu = () => {
    const [theme, setTheme] = useState<string>('light')

    const changeTheme = (theme: string) => {
    setTheme(theme)
}

    const {isOpen} = useSelector(selectMenuState)


    // const openMenu = () => dispatch(setOpenMenuAction())
    // const closeMenu = () => dispatch(setCloseMenuAction())


    if (!isOpen){
        return null
    }
    
    return (
        <div className={style.burgerMenuWrapper} >
            <ul className={style.burgerList}>
                <li style={{width: '237px'}}><UserComponent/></li>
                <li className={style.burgerListItem}><NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink></li>
                <li className={style.burgerListItem}><NavLink style={{textDecoration: 'none'}} to='/addpost'>Add post</NavLink></li>
            </ul>
            <ThemeButtons theme={theme} changeTheme={changeTheme}/>
            <NavLink className={style.signInBtn} style={{textDecoration: 'none'}} to='/signin'>Sign In</NavLink>
        </div>
    ) 
}


