import * as styles from './material-heading.css';

interface MaterialHeadingProps {
  title: string;
  description: string;
}

const MaterialHeading = ({ title, description }: MaterialHeadingProps) => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MaterialHeading;
