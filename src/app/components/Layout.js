import React, {useCallback, useEffect, useState} from "react";
import {ThemeProvider} from "./themeContext";
import {GiCat} from "react-icons/gi";
import {AiOutlineNotification} from "react-icons/ai";
import {BiCamera} from "react-icons/bi";
import ButtonsOverlay from "./ButtonsOverlay";


const Layout = ({children}) => {

    return (
        <ThemeProvider>
            <div className={'dark:bg-dark400  duration-500 relative font-poppins rtl:font-vazirmatn dark:text-light relative'}>

                <div className={`mb-auto  relative`}>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </ThemeProvider>
    );
};

export default Layout;
