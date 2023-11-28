import {useState, ChangeEvent} from 'react'
import styles from './Search.module.scss'
import {SearchIcon} from './SeacrhIcon'

type Props = {
    open?: boolean
    onClickOnIcon: () => void
    event?: () => void
}

// export const SearchInput = ({open}: Props) =>{

//     const isOpenStyle = open ? styles.open : ''

//     return(
        
//     )
// }
type InputWithToggleProps = {
    openInput: boolean
    handleToogle: () => void
}

export const Search = () => {

    const [openInput, setOpenInput] = useState<boolean>(false)
    // const [inputValue, setInputValue] = useState<string>('');

    const handleToogle = () =>{
        setOpenInput(!openInput)
    }


    return (
        <div className={styles.searchWrapper}>
            {openInput &&
            <input type='text' className={styles.searchInput} placeholder='Search...'/> }
            <div className={styles.wrapperSearchIcon} onClick={handleToogle}>
            {openInput ? <SearchIcon/> : <SearchIcon/>}
                {/* <img className={styles.searchIcon} src={icon} onClick={handleToogle}>{openInput ? 'X' : 'O'}</img> */}
            </div>
        </div>
    )
}