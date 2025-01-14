/* "use client"; */
import Head from 'next/head';
import Script from 'next/script';


export default function AutoThemeClass() {

    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
                            (function() {
                                console.log("Ejecutado");
                                document.documentElement.classList.toggle(
                                  'dark',
                                (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches))
                                );
                                
                            })();
                        `,
            }}
        />
    )
}