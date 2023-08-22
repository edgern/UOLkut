import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import styles from './header.module.css';
import logo from '../../assets/headerAssets/orkutlogo.png';

const HeaderLogin: React.FC = () => {
    const navigate = useNavigate(); // Inicialize o useNavigate

    return (
        <header className={styles.header}>
            <div className={styles.contentLogin}>
                 <a href="/" onClick={() => navigate('/')}>
                     <img className={styles.logoimg} src={logo} alt="Logo do Site" />
                </a>
                <nav className={styles.links}>
                    <a href="/" onClick={() => navigate('/')}>Sobre o Orkut</a>
                    <a href="/" onClick={() => navigate('/')}>Centro de Segurança</a>
                </nav>
            </div>
        </header>
    );
};

export default HeaderLogin;
