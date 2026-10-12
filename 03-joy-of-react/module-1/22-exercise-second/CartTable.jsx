function CartTable({ items }) {
    return(
        <table className="shopping-cart">
            <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {items.map((newItems) => (
                    <tr key={newItems.id}>
                        <td>
                            <img 
                             src={newItems.imageSrc}
                             alt={newItems.imageAlt}
                            />
                        </td>
                        <td>{newItems.title}</td>
                        <td>{newItems.price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CartTable;