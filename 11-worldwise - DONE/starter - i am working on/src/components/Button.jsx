import styles from "./Button.module.css";

// function Button({ children, onClick, type }) {
//   return (
//     <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
//       {children}
//     </button>
//   );
// }

function Button({ children, onClick, type }) {
  return (
    <button class={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
