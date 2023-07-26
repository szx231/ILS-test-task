import styles from './ErrorMessage.module.css';

export const ErrorMessage = () => {
  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorMessage}>
      Что-то пошло не так
      <button type="button" className={styles.buttonReload} onClick={handleReloadPage}>
        Перезагрузить
      </button>
    </div>
  );
};
