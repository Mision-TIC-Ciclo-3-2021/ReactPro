function CardTiposMotos({ nombreMoto, imagen}){
    return(
        <li className="breedcard" >
            <div className="contenedorimagen">
                <img src={imagen} alt={nombreMoto}/>
            </div>
            <span className="breedtittle">{nombreMoto}</span>
        </li>
    )
}

export default CardTiposMotos;