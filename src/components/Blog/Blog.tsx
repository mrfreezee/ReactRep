import styles from './Blog.module.scss'
import { Tabs } from '../Tabs/Tabs'
import { PostsList } from '../PostsList/PostsList'
import iconArrowLeft from './Arrow.svg'
import { Footer } from '../Footer/Footer'




export const Blog = () =>{

    const arrNumberPages = [1, 2, 3, '...', 6]

    return(
        <div className={styles.wrapperBlog}>
            <h1 className={styles.headerBlog}>
                Blog
            </h1>
            <Tabs/>
            <PostsList/>
            <div className={styles.pagesPosts}>
                <button className={styles.buttonPreview}/>
                <div className={styles.wrapperNumberPages}>
                    {
                        arrNumberPages.map((item) =>(
                            <div className={styles.numberPage}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <button className={styles.buttonNext}/>
            </div>
            <Footer/>
        </div>
    )
}