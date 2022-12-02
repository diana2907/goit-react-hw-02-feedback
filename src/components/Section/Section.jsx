import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => (
  <section>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);
