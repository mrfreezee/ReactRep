import styles from './PostsList.module.scss'
import { BigCard } from "./BigCard/BigCard"
import { MediumCard } from "./MediumCard/MediumCard"
import { SmallCard } from "./SmallCard/SmallCard"

export const PostsList = () =>{
    return(
        <div className={styles.postsWrapper}>
            <div className={styles.bigAndMediumCards}>
                <BigCard/>
                <div className={styles.mediumCards}>
                    <MediumCard/>
                    <MediumCard/>
                    <MediumCard/>
                    <MediumCard/>
                </div>
            </div>
            <div className={styles.smallCards}>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
                <SmallCard/>
            </div>
        </div>
    )
}