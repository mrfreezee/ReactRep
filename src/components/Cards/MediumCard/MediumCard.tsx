import styles from './MediumCard.module.scss'
import astronaut from './astronautMedium.svg'
import {objCard} from '../BigCard/BigCard'
import { Bookmark } from '../ButtonsCard/Bookmark'
import { MenuIcon } from '../ButtonsCard/MenuIcon'
import { LikeIcon } from '../ButtonsCard/LikeIcon'
import { DislikeIcon } from '../ButtonsCard/DislikeIcon'

export const MediumCard = () =>{
    return(
        <div className={styles.mediumCardWrapper}>
            <img className={styles.astronautImg} src={astronaut}/>
            <div className={styles.mainBlock}>
                <div className={styles.dateBlock}>
                        {objCard.date}
                </div>
                <div className={styles.titleCard}>
                    {objCard.title}
                </div>
            </div>
            <div className={styles.buttonsCard}>
                <div className={styles.handsIcon}>
                    <div className={styles.likeIconWrapper}>
                        <LikeIcon/>
                    </div>
                    <div className={styles.dislikeIconWrapper}>
                        <DislikeIcon/>
                    </div>
                </div>
                <div className={styles.managementIcons}>
                    <Bookmark/>
                    <MenuIcon/>
                </div>

            </div>
        </div>
    )
}