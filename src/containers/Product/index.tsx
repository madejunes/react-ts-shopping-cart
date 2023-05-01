import './Product.css'

const Product: React.FC = (): JSX.Element => {
  return(
    <div className="product">
      <div className="product__thumbnail">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
      </div>

      <h2 className="product__title">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </h2>
    </div>
  )
}

export { Product }
