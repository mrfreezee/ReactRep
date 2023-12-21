import styles from './Blog.module.scss'
import { Tabs } from '../Tabs/Tabs'
import { PostsList } from '../PostsList/PostsList'
import { Footer } from '../Footer/Footer'
import prewArrow from './ArrowPrew.svg'
import nextArrow from './ArrowNext.svg'



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
                <button className={styles.buttonPreview}>
                    <img src={prewArrow}/>
                    Prev
                </button>
                <div className={styles.wrapperNumberPages}>
                    {
                        arrNumberPages.map((item) =>(
                            <div className={styles.numberPage}>
                                {item}
                            </div>
                        ))
                    }
                </div>
                <button className={styles.buttonNext}>
                    Next
                    <img src={nextArrow}/>
                </button>
            </div>
            
        </div>
    )
}