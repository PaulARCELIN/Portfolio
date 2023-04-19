import './Header.css'
import CVDownload from '../CVDownload/CVDownload'

function Header() {
    return <header className="app-header">
        <p className='nom'>PAUL ARCELIN</p>
        <p>PORTFOLIO</p>
        <CVDownload />
    </header>
}

export default Header