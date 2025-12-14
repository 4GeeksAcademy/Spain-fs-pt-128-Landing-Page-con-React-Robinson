const Card = (props) => {
    console.log(props);

    return (
        <div className="col-sm-6 col-md-3 p-2">
            <div className="card">
                <img src={props.viaje.imageUrl} className="card-img-top" style={{height:"200px"}} alt=" " />
                <div className="d-flex " style={{ border: "1px solid gray", height:"300px", aspectRatio: "4/3"}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.viaje.titulo}</h5>
                        <p className="card-text">{props.viaje.descripcion}</p>
                        <a href="#" className="btn btn-primary mt-auto">Explorar</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

// 
// style={{height:"200px"}} 