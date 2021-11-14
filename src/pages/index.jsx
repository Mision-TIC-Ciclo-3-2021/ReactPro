import CardTiposMotos from "components/CardTiposMotos";
import motologo from 'media/motologo2.png';
import gixxer from 'media/gixxer.jpg';
import honda from 'media/sddefault.jpg';

function Index(){
    return(
        <div>
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
    <main></main>
    <section>
        <h1>Tipos de Motos</h1>
        <ul className="breedcardcontainer">
            <CardTiposMotos nombreMoto="Honda" imagen={honda} />
            <CardTiposMotos nombreMoto="Susuki" imagen={gixxer} />
            <CardTiposMotos nombreMoto="Susuki" imagen={gixxer}/>
            <CardTiposMotos nombreMoto="Susuki" imagen={gixxer}/>
            <CardTiposMotos nombreMoto="Susuki" imagen={gixxer}/>
            <CardTiposMotos nombreMoto="Susuki" imagen={gixxer}/>
        </ul>
    </section>
    <footer>

    </footer>            
        </div>
    )
}

export default Index;