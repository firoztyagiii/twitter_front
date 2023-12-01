import styles from "./HomeLayout.module.css";

const HomeLayout = ({ children }) => {
  return <main className={styles.homeContainer}>{children}</main>;
};

export default HomeLayout;
