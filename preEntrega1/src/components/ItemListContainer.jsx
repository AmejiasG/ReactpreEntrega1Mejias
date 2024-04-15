const ItemListContainer = ({mensaje}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-dark text-center py-5">{mensaje}</h2>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;