import styles from "./TextField.module.css";

type Props = {
  value: string;
  label: string;
  placeholder: string;
  error?: string;
  onChange: (value: string) => void;
};

const TextField = (props: Props) => {
  return (
    <div className={styles.container}>
      <label>{props.label}</label>
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={event => props.onChange(event.target.value)}
        value={props.value}
      />
      {props.error && <p className={styles.error}>{props.error}</p>}
    </div>
  );
};

export { TextField };
