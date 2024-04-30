// ShopItem.jsx

// ShopItem.jsx

import PropTypes from 'prop-types';

const ShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Color: {product.color}</p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

ShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
};

export default ShopItem;
// Объяснение:
// - Компонент `ShopItem` получает свойство `product`, содержащее информацию об одном товаре.
// - Отображает изображение, название, цвет и цену продукта.
// - Кнопку «Добавить в корзину» можно при необходимости настроить с дополнительным функционалом.
// - Класс `shop-item` применяется к обертке `div` для целей стилизации.