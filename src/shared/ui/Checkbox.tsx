import styles from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export default function Checkbox({
  checked = false,
  onToggle,
  children,
}: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <label className={styles.label}>
        <div className={styles.hiddenCheckbox}>
          <input
            type="checkbox"
            checked={checked}
            onChange={onToggle}
          />
        </div>
        <div
          className={`${styles.fakeCheckbox} ${checked && styles.checked}`}
        ></div>
        {children}
      </label>
    </div>
  );
}
