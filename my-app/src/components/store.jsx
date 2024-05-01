// Store.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

const Store = ({ products }) => {
  const [view, setView] = useState('card'); // initial view (can be 'card' or 'list')

  const onSwitch = () => {
    setView((prevView) => (prevView === 'card' ? 'list' : 'card'));
  };

  return (
    <div className="store">
      <IconSwitch icon={view === 'card' ? 'view_module' : 'view_list'} onSwitch={onSwitch} />
      {view === 'card' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
};

Store.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Store;
// Объяснение:
// - Компонент Store управляет состоянием приложения и сохраняет список продуктов в свойстве Products.
// - Он использует хук `useState` для создания переменной состояния с именем `view`, которая будет либо 'card', либо 'list'.
// - Функция onSwitch переключает значение view, когда пользователь щелкает значок.
// - В зависимости от текущего `представления`, он отображает либо компонент `CardsView`, либо `ListView`.
// - Опция `icon` для компонента `IconSwitch` определяется текущим `view`.
// - Класс `store` применяется к обертке `div` для целей стилизации.