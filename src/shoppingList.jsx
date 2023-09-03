const products = [
    {title: 'Egg', id:1},
    {title: 'butter', id:2},
    {title: "Cheese", id: 3},
    {title: "milk",id:4}
  ]



const ShoppingList = ()=>{
    const itemList = products.map(
        product =>
        <li key={product.id}>
            {product.title}

        </li>
    )
    return(
        <ul>{itemList}</ul>

    )
}


export default ShoppingList