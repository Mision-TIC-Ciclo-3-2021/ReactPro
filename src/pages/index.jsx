import CardTiposMotos from "components/CardTiposMotos";
import motologo from 'media/motologo2.png';
import gixxer from 'media/gixxer.jpg';
import honda from 'media/sddefault.jpg';
import Layout from "layouts/Layout";

function Index(){
    return(
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
    )
}

export default Index;