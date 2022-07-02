import PropTypes from 'prop-types';
import scss from './Statistics.module.scss';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={scss.statistics}>
      {title && <h2 className={scss.title}>{title}</h2>}
      <ul className={scss.statList}>
        {stats.map(dataItem => <li style={{ backgroundColor: getRandomColor() }} className={scss.item} key={dataItem.id}>
          <span className={scss.label}>{dataItem.label}</span>
          <span className={scss.percentage}>{dataItem.percentage}%</span>
        </li>)}
      </ul>
    </section>
  )
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
}