import styles from './ContentPage.module.scss'
import s from '../ButtonsPage/ButtonsPage.module.scss'
import astronaut from './astronautPage.svg'
import { Header } from '../../../Header/Header'
import { Footer } from '../../../Footer/Footer'
import { TextPage } from './TextPage'
import { LikeIcon } from '../ButtonsPage/LikeBtn'
import { DislikeIcon } from '../ButtonsPage/DislikeBtn'
import { Bookmark } from '../../../PostsList/ButtonsCard/Bookmark'


export const ContentPage = () => {
    return (
        <>
            <div className={styles.pageWrapper}>
                <div className={styles.btnHomeAndNumPost}>
                    <button className={styles.btnHome}>Home</button>
                    |
                    <div className={styles.numPost}>
                        Post 14254
                    </div>
                </div>
                <div className={styles.headerPage}>
                    Astronauts prep for new solar arrays on nearly seven-hour spacewalk
                </div>
                <div className={styles.contentPage}>
                    <img src={astronaut} />
                    <div className={styles.textPage}>
                        <TextPage />
                    </div>
                    <div className={styles.buttonsPage}>
                        <button className={s.btnLike}>
                            <LikeIcon />
                        </button>
                        <button className={s.btnDislike}>
                            <DislikeIcon />
                        </button>
                        <button className={s.bookmark}>
                            <Bookmark/>
                            <p className={styles.bookmarkText}>Add to favorites</p>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}