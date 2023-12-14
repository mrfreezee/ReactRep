import styles from './Footer.module.scss'

export const Footer= () =>{
    return(
        
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <p>©2022 Blogfolio</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}