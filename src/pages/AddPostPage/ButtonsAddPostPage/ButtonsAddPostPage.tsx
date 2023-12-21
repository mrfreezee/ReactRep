import styles from './ButtonsAddPostPage.module.scss'

export const ButtonsAddPostPage = () =>{
    return(
        <div className={styles.wrapperButtons}>
            <button className={styles.deletePostBtn}>Delete post</button>
            <div className={styles.cancelAndAddPostBtns}>
                <button className={styles.cancelBtn}>Cancel</button>
                <button className={styles.addPostBtn}>Add post</button>

            </div>
        </div>
    )
}