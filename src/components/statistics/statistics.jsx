import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, data }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.stat__list}>
        {data.map(item => (
          <li key={item.id} className={css.item} style={randomColor()}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function randomColor() {
  return {
    backgroundColor: `rgb(${random(0, 255)},${random(0, 255)},${random(
      0,
      255
    )})`,
  };
}

function random(min = 0, max = 255) {
  const result = Math.ceil(Math.random() * (max - min) + min);
  return result;
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
