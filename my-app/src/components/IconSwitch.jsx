// IconSwitch.jsx

import PropTypes from 'prop-types';

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <i className="material-icons">{icon}</i>
    </div>
  );
};

IconSwitch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired
};

export default IconSwitch;
// Объяснение:
// - Компонент `IconSwitch` получает свойство `icon` (например, "view_list" или "view_module") и свойство `onSwitch` (обработчик событий).
// - Когда пользователь нажимает на иконку, вызывается функция `onSwitch`.
// - Значок отображается с помощью библиотеки Material Icons.
// - Класс `icon-switch` применяется к обертке `div` для целей стилизации.









{/* <IconSwitch icon={"view_list"} onSwitch={() => console.log("change state here")} /> */}
