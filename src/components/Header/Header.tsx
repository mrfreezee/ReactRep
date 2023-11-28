import style from './Header.module.scss'
import { BurgerWrapper } from './HeaderComponents/Burger/BurgerWrapper'
import { UserComponent } from './HeaderComponents/User/User'
import { Search } from './HeaderComponents/Search/Search'


export const Header = () =>{
    return(
        <div className={style.header}>
            <BurgerWrapper/>
            <Search/>
            <UserComponent/>
        </div>
    )
}