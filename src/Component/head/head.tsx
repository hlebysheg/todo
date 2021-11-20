import React from "react";
import HD from './Header.module.css';

export const Head: React.FC = () => {
    return (
        <header className={HD.header}>
            <a className={'mif-git '+HD.ref} href={'https://github.com/hlebysheg/todo'}></a>
        </header>
    )
}