import css from 'components/Notification/Notification.module.css';

export const Notification = ({ message }) => (
  <p className={css.message}>{message}</p>
);
