import cart from "../assets/images/cart.svg"
const CartWidget = () => {
    return (
        <>
        <button type="button" class="btn btn-primary position-relative">
            <img src={cart} alt="Carrito" width={22}/>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">3</span>
        </button>
    </>
    )
}

export default CartWidget