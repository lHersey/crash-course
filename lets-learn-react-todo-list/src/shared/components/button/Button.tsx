import styles from "./Button.module.css";

type Props = {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = (props: Props) => {
  return (
    <button
      type="button"
      disabled={props.disabled}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export { Button };
