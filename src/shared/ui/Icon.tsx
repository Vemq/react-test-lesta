import styles from './Icon.module.css';

interface IconProps {
  imageLink: string;
  title?: string;
}

export default function Icon({ imageLink, title }: IconProps) {
  return (
    <i
      className={styles.icon}
      style={{ backgroundImage: `url(${imageLink})` }}
      title={title}
    ></i>
  );
}
