import { useState } from 'react'
import styles from './BigCard.module.scss'
import iconEye from './iconEye.svg'
import astronaut from './astronaut.svg'
import { Bookmark } from '../ButtonsCard/Bookmark'
import { MenuIcon } from '../ButtonsCard/MenuIcon'
import { LikeIcon } from '../ButtonsCard/LikeIcon'
import { DislikeIcon } from '../ButtonsCard/DislikeIcon'





export const objCard = {
    id: '0',
    image: `${astronaut}`,
    text: `Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for
    a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research
    lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S.
    record for a single spaceflight.`,
    date: "April 20, 2021",
    lesson_num: 0,
    title: "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
    author: 0
}



export const BigCard = () => {
    

    return (
        <div id={objCard.id} className={styles.bigCardWrapper}>
            <div className={styles.mainBlock}>
                <div className={styles.textBlock}>
                    <div className={styles.dateBlock}>
                        <p className={styles.dateText}>{objCard.date}</p>
                        <img className={styles.iconEye} src={iconEye} />
                    </div>
                    <div className={styles.titleCard}>
                        {objCard.title}
                    </div>
                    <div className={styles.textCard}>
                        {objCard.text}
                    </div>
                </div>
                <img className={styles.astronautImg} src={objCard.image} />
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