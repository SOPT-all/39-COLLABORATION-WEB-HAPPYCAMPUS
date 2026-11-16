import * as styles from './material-heading.css';

interface MaterialHeadingProps {
  title: string;
  description: string;
}

const MaterialHeading = ({ title, description }: MaterialHeadingProps) => {
  return (
    <div className={styles.headingContainer}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MaterialHeading;
