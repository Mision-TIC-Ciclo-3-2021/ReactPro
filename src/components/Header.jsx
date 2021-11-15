import motologo from 'media/motologo2.png';

const Header = () => {
    return(
        <header>
        <div>hola mundo este es el div</div>
            <ul className="navbar">
                
                <li >
                    <img src={motologo} alt="iamgen" className="logo"/>
                </li>
                <li>
                    <button className="button mainbutton">Crear nuevo post</button>
                </li>
                <li>
                    <button className="button secondarybutton">Login</button>
                </li>
                <li>
                    <button className="button mainbutton">Registro</button>
                </li>
                <li>
                    <div className="buscar">
                        <input placeholder="buscar una raza" />
                        <i className="fas fa-search iconobusqueda"></i>
                    </div>
                    
                </li>
            </ul>
            
        </header>
    )
};

export default Header;