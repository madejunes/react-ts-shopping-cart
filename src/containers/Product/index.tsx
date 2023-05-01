import './Product.css'

interface ProductProps {
  title: string;
  image: string;
}

const Product: React.FC<ProductProps> = ({title, image}): JSX.Element => {
  return(
    <div className="product">
      <div className="product__thumbnail">
        <img src={image} alt={title} />
      </div>

      <h2 className="product__title">
        {title}
      </h2>
    </div>
  )
}

export { Product }
