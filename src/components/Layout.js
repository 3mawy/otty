import React, {useCallback, useEffect, useState} from "react";
import {ThemeProvider} from "./themeContext";


const Layout = ({children}) => {

    return (
        <ThemeProvider>
            <div className={'dark:bg-dark400 duration-500 relative font-poppins rtl:font-vazirmatn dark:text-light'}>
                <div className={`sticky z-50 `}>
                    {/*<Header/>*/}
                </div>
                <div className={`mb-auto min-h-[76.73vh] relative`}>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </ThemeProvider>
    );
};

export default Layout;