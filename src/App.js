import logo from './logo.svg';
import './styles/styles.css';
import motologo from './media/motologo2.png';
import gixxer from './media/gixxer.jpg';
import honda from './media/sddefault.jpg';


function App() {
  return (
    <div className="App">


    <header>
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
    <main></main>
    <section>
        <h1>Tipos de Motos</h1>
        <ul className="breedcardcontainer">
            <li className="breedcard">
                <div className="contenedorimagen">
                    <img src={gixxer} alt="moto honda"/>
            
                </div>
                <span className="breedtittle">Foto Gixxer</span>
            </li>

            <li className="breedcard">
                <div className="contenedorimagen">
                    <img src={honda} alt="moto honda"/>
            
                </div>
                <span className="breedtittle">Foto Honda</span>
            </li>
            
        </ul>
    </section>
    <footer></footer>



    </div>
  );
}

export default App;
