import * as styles from './tag.css';

interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => (
  <span className={styles.tag}># {label}</span>
);

export default Tag;
