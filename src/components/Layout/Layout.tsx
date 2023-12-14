import './Layout.css'
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import { useContext } from 'react';
import { useThemeContext } from '../../helpers/ThemeContext';



export const Layout = () => {   
    const [theme, setTheme] = useState<string>('light')

    const changeTheme = (theme: string) =>{
        setTheme(theme)
    }

    const themeCtx = useThemeContext()

    return (
        <div  className={themeCtx.state}>

            {/* <RequierAuth> */}
            <Header/>
            <div className='main'>
                <Outlet/>
            </div>
            <Footer />
            {/* </RequierAuth> */}
        </div> 
    )
}