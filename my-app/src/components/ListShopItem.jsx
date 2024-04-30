
// ListShopItem.jsx Это отображение карточек в строку

import PropTypes from 'prop-types';

const ListShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <h3>{product.name}</h3>
      <p>{product.color}</p>
      <img src={product.img} alt={product.name} />
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

ListShopItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired
};

export default ListShopItem;
// Объяснение:
// - Компонент `ShopItem` получает свойство `product`, содержащее информацию об одном товаре.
// - Отображает изображение, название, цвет и цену продукта.
// - Кнопку «Добавить в корзину» можно при необходимости настроить с дополнительным функционалом.
// - Класс `shop-item` применяется к обертке `div` для целей стилизации.