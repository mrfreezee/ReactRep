import './Layout.css'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
// import { useThemeContext } from '../../helpers/ThemeContext';
import { useSelector } from 'react-redux';
import { BurgerMenu } from '../Header/HeaderComponents/Burger/BurgerMenu';

import { selectTheme } from '../../store/Theme/selectors';
import { selectMenuState } from '../../store/Menu/selectors';


export const Layout = () => {   
    

    // const themeCtx = useThemeContext()

    const {theme} = useSelector(selectTheme)

    return (
        <div  className={theme}>

            {/* <RequierAuth> */}
            <Header/>
            <BurgerMenu />
            <div className='main'>
                <Outlet/>
            </div>
            <Footer />
            {/* </RequierAuth> */}
        </div> 
    )
}