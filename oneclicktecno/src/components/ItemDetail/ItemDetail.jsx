import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({product}) => {
    const onAdd = (cant) => {
        console.log ("la cantidad seleccionada es: ", cant)
    }
  return (
    <div className="container border border-3 border-primary rounded">
    <div className="row">
        <div className="col">
            <img className="w-50" src={product.foto} alt="foto producto" />
            <h3>Nombre: {product.name}</h3>
            <h3>Categoria: {product.categoria}</h3>
            <h4>Precio: {product.price}</h4>
        </div>
        <div className="col">
            <ItemCount
            stock={10}
            initial={1}
            onAdd={onAdd}
            />

        </div>
    </div>
</div>
)
}

export default ItemDetail