import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.stats}>
    <p className={css.stat__item}>
      Neutral: <span className={css.quantity}>{neutral}</span>
    </p>
    <p className={css.stat__item}>
      Good: <span className={css.quantity}>{good}</span>
    </p>
    <p className={css.stat__item}>
      Bad: <span className={css.quantity}> {bad}</span>
    </p>
    <p className={css.stat__item}>
      Total: <span className={css.quantity}>{total}</span>
    </p>
    <p className={css.stat__item}>
      Positive Feedback:{' '}
      <span className={css.quantity}>{positivePercentage} %</span>
    </p>
  </div>
);
