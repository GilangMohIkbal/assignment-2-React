export default memo (function MenuCard({menu}){
    return(
        <tr>
        <td>{menu.name}</td>
        <td>{menu.price}</td>
        <td>{menu.price + (menu.price * (menu.tax / 100))}</td>
        <td>{menu.price - (menu.price * (menu.tax / 100))}</td>
        </tr>
    )
})