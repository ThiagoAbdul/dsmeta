import logo from '../../assets/imagens/logo-small.svg'
import './style.css'

function Header(){
    return (
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por
                <a href="https://github.com/ThiagoAbdul" target="_blank" rel="external">
                @ThiagoAbdul</a>
            </p>
        </div>
    </header>
    )
}

export default Header