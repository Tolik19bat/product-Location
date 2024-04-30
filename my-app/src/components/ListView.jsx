// ListView.jsx

import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

const ListView = ({ items }) => {
    return (
        <div className="list-view">
            {items.map((product, index) => (
                <ShopItem key={index} product={product} />
            ))}
        </div>
    );
};

ListView.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ListView;
// Объяснение:
// - Компонент ListView получает свойство item, которое представляет собой массив данных о товаре.
// - Он сопоставляет массив `items` и отображает компонент `ShopItem` для каждого продукта.
// - Каждый компонент ShopItem получает данные о продукте в качестве свойства.
// - Для свойства `key` установлено значение `index`, чтобы обеспечить уникальные ключи для каждого отображаемого элемента.
// - Класс `list-view` применяется к обертке `div` для целей стилизации.