import styles from './Main.module.scss'
import { ContentPage } from './components/Blog/Pages/ContentPage/ContentPage'
import { SignInPage } from './pages/SignInPage/SignInPage'
import { SignUpPage} from './pages/SignUpPage/SignUpPage'
import { Success } from './pages/Success/Success'

export const Main = () =>{
    return(
        <div className={styles.main}>
            {/* <ContentPage/> */}
            {/* <SignInForm/> */}
            <SignUpPage/>
        </div>
    )
}