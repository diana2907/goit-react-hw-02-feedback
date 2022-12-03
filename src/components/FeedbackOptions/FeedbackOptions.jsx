import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    <ul className={css.list}>
      {options.map((option, idx) => {
        return (
          <li key={option[idx]} className={css.item}>
            <button
              className={css.btn}
              type="button"
              name={option}
              onClick={onLeaveFeedback}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </>
);
