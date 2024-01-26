export default function Fcaracteres({ info , setCaracteres }) {
    console.log(info);

    const resetInicio = () => {
        console.log("salir al inicio");
        setCaracteres(null)
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetInicio}>Volver al inicio</span>
            <div className="container-characters">
                {info.map((data, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={data.image} alt={data.name} />
                        </div>
                        <div>
                            <h3>{data.name}</h3>
                            <h6>
                                {data.status === "Alive" ? (
                                    <>
                                        <span className="alive">Alive</span>
                                    </>
                                ):(
                                    <>
                                        <span className="dead">Dead</span>
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{data.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{data.species}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" onClick={resetInicio}>Volver al inicio</span>
        </div>
    );
}
