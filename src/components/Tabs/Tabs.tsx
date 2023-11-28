
import React, { useState } from "react"

import 'react-tabs/style/react-tabs.css';
import styles from './Tabs.module.scss'





type Props = {
    active?: boolean
    text: string
    onTabClick: () => void
    
}

export const Tab = ({text, active, onTabClick}: Props) =>{

    const isActiveStyle = active ? styles.active : ''

    return(
        <div className={styles.tab + ' ' + isActiveStyle} onClick={onTabClick}>
            {text}
        </div>
    )
}

export const Tabs = () =>{

    const [activeTabIndex, setActiveTabIndex] = useState(0)
    
    const tabs = ['All', 'My favorites', 'Popular']

    const changeTabHandler = (index: number) =>{
        setActiveTabIndex(index)
    }

    return(
        <div className={styles.tabWrapper}>
            {
                tabs.map((currentTab, index) =>(
                    <Tab 
                    key={currentTab} 
                    text={currentTab} 
                    active={index === activeTabIndex}
                    onTabClick={() => changeTabHandler(index)}
                    />
                )) 
            }
        </div>
    )
}
