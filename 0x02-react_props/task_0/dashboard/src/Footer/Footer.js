import { getFooterCopy } from '../utils/utils';
import { getFullYear } from '../utils/utils';

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