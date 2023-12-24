import styles from './BackIconButton.module.scss';

const BackIconButton = () => (
  <svg
    className={styles.back_button}
    width="16"
    height="30"
    viewBox="0 0 16 30"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.4014 1.88122C15.401 2.37834 15.2032 2.85493 14.8514 3.20622L5.26143 12.7962C4.97116 13.0864 4.7409 13.431 4.5838 13.8101C4.4267 14.1893 4.34584 14.5958 4.34584 15.0062C4.34584 15.4167 4.4267 15.8231 4.5838 16.2023C4.7409 16.5815 4.97116 16.926 5.26143 17.2162L14.8389 26.7937C15.1805 27.1474 15.3695 27.621 15.3652 28.1126C15.3609 28.6042 15.1637 29.0745 14.8161 29.4221C14.4684 29.7698 13.9982 29.967 13.5066 29.9712C13.0149 29.9755 12.5413 29.7865 12.1877 29.445L2.61018 19.875C1.32238 18.5846 0.599121 16.8361 0.599121 15.0131C0.599121 13.1901 1.32238 11.4416 2.61018 10.1512L12.2002 0.554972C12.4624 0.292577 12.7966 0.113864 13.1604 0.0414461C13.5242 -0.0309716 13.9014 0.00616108 14.2441 0.148145C14.5868 0.29013 14.8797 0.530584 15.0857 0.839083C15.2917 1.14758 15.4016 1.51026 15.4014 1.88122Z" />
  </svg>
);

export default BackIconButton;
