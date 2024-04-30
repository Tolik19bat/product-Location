// CardsView.jsx

import CardsShopItem from './CardsShopItem';
import PropTypes from 'prop-types';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        <CardsShopItem key={index} product={product} />
      ))}
    </div>
  );
};
CardsView.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

export default CardsView;
// Объяснение:
// - Компонент CardsView получает свойство card, которое представляет собой массив данных о товаре.
// - Он отображает массив `cards` и отображает компонент `ShopCard` для каждого продукта.
// - Каждый компонент ShopCard получает данные о продукте в качестве реквизита.
// - Для свойства `key` установлено значение `index`, чтобы обеспечить уникальные ключи для каждой отображаемой карты.
// - Класс card-view применяется к обертке div для целей стилизации.