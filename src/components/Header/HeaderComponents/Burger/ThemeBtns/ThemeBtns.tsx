import { useSelector } from 'react-redux'
// import { useThemeContext} from '../../../../../helpers/ThemeContext'
import { DarkBtn } from "./DarkBtn"
import { LightBtn } from "./LightBtn"
import styles from './ThemeBtns.module.scss'
import { selectTheme } from '../../../../../store/Theme/selectors'
import { useDispatch } from 'react-redux'
import { setLightThemeAction, setDarkThemeAction } from '../../../../../store/Theme/actions'

type Props = {
    theme: string 
    changeTheme: (theme: string) => void
}


export const ThemeButtons = (props: Props) =>{
    // const {state, setLight, setDark} = useThemeContext()
    const {theme} = useSelector(selectTheme)
    const dispath = useDispatch()

    const setLight = () => dispath(setLightThemeAction())
    const setDark = () => dispath(setDarkThemeAction())

    return(
        <div className={styles.themeBtnsWrapper}>
        
        
        <button  className={styles.themBtns} onClick={setLight} disabled={theme === 'light'}>            
            <LightBtn disabled={theme !== 'light'}/>
        </button>

        <button className={styles.themBtns} onClick={setDark} disabled={theme !== 'light'}>
            <DarkBtn disabled={theme === 'light'}/>
        </button>
        
        {/* <LightSvg disabled={true}/> */}
        
        </div>
    )
}