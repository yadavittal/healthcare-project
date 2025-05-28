import styles from "./Header.module.css"
import img from "../../../src/assets/doctor1.jpg"

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <div className={styles.searchContainer}>
          <svg
            className={styles.searchIcon}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input type="text" placeholder="Search" className={styles.searchInput} />
           <div className={styles.notificationContainer}>
          <div className={styles.iconWrapper}>
            <svg
            className={styles.bellIcon}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
          </div>
          <div className={styles.notificationDot}></div>
        </div>
        </div>

      </div>

      <div className={styles.rightSection}>
        <div className={styles.userProfile}>
          <img
            src={img}
            alt="User Avatar"
            className={styles.avatar}
          />
        </div>

        <button className={styles.addButton}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header

