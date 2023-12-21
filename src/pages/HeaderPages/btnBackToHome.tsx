import styles from './HeaderPages.module.scss'
import { Link } from 'react-router-dom'


export const BtnBack = () =>{
    return(
        
        // <a href='#' className={styles.backButton}>
        //     Back to home
        // </a>
        <Link className={styles.backButton} to='/'>Back to home</Link>
    )
}