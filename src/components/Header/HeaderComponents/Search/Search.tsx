import {useState, ChangeEvent} from 'react'
import styles from './Search.module.scss'
import {SearchIcon} from './SeacrhIcon'



export const Search = () => {

    const [openInput, setOpenInput] = useState<boolean>(false)

    const handleToogle = () =>{
        setOpenInput(!openInput)
    }


    return (
        <div className={styles.searchWrapper}>
            {openInput &&
            <input type='text' className={styles.searchInput} placeholder='Search...'/> }
            <div className={styles.wrapperSearchIcon} onClick={handleToogle}>
            {openInput ? <SearchIcon/> : <SearchIcon/>}
            </div>
        </div>
    )
}