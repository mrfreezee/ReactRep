import styles from './HeaderPages.module.scss'

export const BtnBack = () =>{
    return(
        
        <a href='#' className={styles.backButton}>
            Back to home
        </a>
    )
}