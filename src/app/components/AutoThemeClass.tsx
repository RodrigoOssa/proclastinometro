"use client";

import { useEffect, useState } from "react";

export default function AutoThemeClass() {
    //const darkTheme: boolean = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));


    /*  useEffect(() => {
         document.documentElement.classList.toggle(
             'dark',
             darkTheme)
     }, []); */

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
                console.log("Ejecutado");
                    document.documentElement.classList.toggle(
                      'dark',
                    (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
                    )
                })();
            `,
            }}
        />
    )
}