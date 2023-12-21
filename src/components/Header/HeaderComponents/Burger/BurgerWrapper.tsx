import { useState } from "react"
import { BurgerIcon } from "./BurgerIcon"
import { BurgerMenu } from './BurgerMenu'
import style from './BurgerWrapper.module.scss'

// import { useThemeContext } from '../../../../helpers/ThemeContext';



export const BurgerWrapper = () => {
    const [open, setOpen] = useState(false)

    const toogle = () => setOpen(!open)

    const [theme, setTheme] = useState<string>('light')

    const changeTheme = (theme: string) =>{
        setTheme(theme)
    }

    // const themeCtx = useThemeContext()
    return (
        <div className={style.menuWrapper}>
            <BurgerIcon />
            {/* <BurgerMenu open={open} theme={theme} changeTheme={changeTheme}/> */}
        </div>
    )
} 



// export const BurgerWrapper = () => {
//     const [open, setOpen] = useState(false)

//     const toogle = () => setOpen(!open)

//     const [theme, setTheme] = useState<string>('light')

//     const changeTheme = (theme: string) => {
//         setTheme(theme)
//     }

//     const themeCtx = useThemeContext()

//     return (
//         <div className={style.burgerWrapper}>
//             <BurgerIcon/>
//             <BurgerMenu/>
//         </div>
//     )
// }