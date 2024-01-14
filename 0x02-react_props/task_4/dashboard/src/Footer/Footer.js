import React from "react";
import { getFooterCopy } from '../utils/utils';
import { getFullYear } from '../utils/utils';
import './Footer.css';

function Footer() {
    const isIndex = true;
    return(
        <>
            <footer className="App-footer">Copyright {getFullYear()} - {getFooterCopy(isIndex)}
            </footer>
        </>
    )
}
export default Footer