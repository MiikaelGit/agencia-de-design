import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png'
import iconeTwitter from '../../assets/twitter.png'
import iconeLinkedin from '../../assets/linkedin.png'
import iconeDribble from '../../assets/dribble.png'
import iconeBehance from '../../assets/behance.png'
import iconeGooglePlus from '../../assets/google-plus.png'
import './style.css';

export default function Rodape(props) {
    return ( // {props.temaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}
        <footer className={props.temaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>
            <img src={Logo} alt="" />
            <p className="paragrafo">Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
            <div className="iconesRodape">
                <img src={iconeFacebook} alt="" />
                <img src={iconeTwitter} alt="" />
                <img src={iconeLinkedin} alt="" />
                <img src={iconeDribble} alt="" />
                <img src={iconeBehance} alt="" />
                <img src={iconeGooglePlus} alt="" />
            </div>
            <div>
                <p className="copyright">Copyright 2022 &copy; <span>Mikael</span></p>
            </div>
        </footer>
    )
}