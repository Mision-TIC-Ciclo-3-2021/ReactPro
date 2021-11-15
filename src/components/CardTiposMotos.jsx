import {Link} from 'react-router-dom'

function CardTiposMotos({ nombreMoto, imagen}){
    return(
        <li className="breedcard" >
            <Link to='/test2'>
            <div className="contenedorimagen">
                <img src={imagen} alt={nombreMoto}/>
            </div>
            </Link>

            <span className="breedtittle">{nombreMoto}</span>
        </li>
    )
}

export default CardTiposMotos;