import Logo from '../../assets/logo.png';
import IconeLua from '../../assets/moon.png';
import IconeSol from '../../assets/sun.png'
import './style.css';

export default function Topo(props) {
    return (
        <header className={props.temaEscuro ? 'topo-modo-escuro' : 'topo-modo-claro'}>
            <img className="logo" src={Logo} alt="" />
            <button onClick={props.alterarTema} className={props.temaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
                <img className="iconesBtn" src={props.temaEscuro ? IconeSol : IconeLua} alt="" />
            </button>
        </header>
    )
}