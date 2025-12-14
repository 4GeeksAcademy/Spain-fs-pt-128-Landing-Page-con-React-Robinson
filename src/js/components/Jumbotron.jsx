import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron"style={{color: "black", padding: "2rem"}}>
            <h5 className="display-4"><strong>Explora sin fronteras</strong></h5>
            <p className="lead"> <strong>Viajar no es solo cambiar de lugar, es cambiar de perspectiva. Cada camino recorrido guarda una historia, cada destino despierta una emoción y cada aventura nos recuerda lo grande que es el mundo y lo pequeños que son nuestros miedos. Atrévete a descubrir nuevos paisajes, culturas y experiencias que transforman. Sal, explora, equivócate, aprende y vive… 
                porque los mejores recuerdos no se guardan en mapas, sino en el corazón.</strong>🌍✈️</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Leer más</a>
        </div>
    );
};

export default Jumbotron;