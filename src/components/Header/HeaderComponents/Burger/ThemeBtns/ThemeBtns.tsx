import { useThemeContext} from '../../../../../helpers/ThemeContext'
import { DarkBtn } from "./DarkBtn"
import { LightBtn } from "./LightBtn"
import styles from './ThemeBtns.module.scss'

type Props = {
    theme: string 
    changeTheme: (theme: string) => void
}


export const ThemeButtons = (props: Props) =>{
    const themeState = useThemeContext()

    return(
        <div className={styles.themeBtnsWrapper}>
        
        
        <button  className={styles.themBtns}
            onClick={() => themeState.setState('light')} 
            disabled={themeState.state === 'light'}
        >
            
            <LightBtn disabled={themeState.state !== 'light'}/>
        </button>
        <button className={styles.themBtns}
            onClick={() => themeState.setState('dark')} 
            disabled={themeState.state !== 'light'}
            >
            <DarkBtn disabled={themeState.state === 'light'}/>
        </button>
        
        {/* <LightSvg disabled={true}/> */}
        
        </div>
    )
}