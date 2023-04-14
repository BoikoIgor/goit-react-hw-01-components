import PropTypes from 'prop-types';
import { StatsWrap, Title, StatsList, StatsItem } from './Statistics.styled';

function getRandomColor() {
  // Генеруємо випадкове шістнадцяткове число для кольору
  let color = Math.floor(Math.random() * 16777215).toString(16);
  // Додаємо нулі спереду, якщо потрібно, щоб зробити довжину рядка рівною 6 символів
  while (color.length < 6) {
    color = '0' + color;
  }
  return '#' + color;
}

export const Statistics = ({ title, stats }) => {
  //   console.log(stats);
  return (
    <StatsWrap>
      {title && <Title key={title}>{title.toUpperCase()}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem
              key={id}
              style={{
                backgroundColor: getRandomColor(),
              }}
            >
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsWrap>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
