import { useState } from "react"
import { navigationData } from "../../data/navigationData"
import styles from "./Sidebar.module.css"
import { getIcon } from "../../utils/sidebarUtils"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(prev => !prev)

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <h1 className="logo-header">
              <span className={styles.logoHealth}>Health</span>
              <span className={styles.logoCare}>care.</span>
            </h1>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>General</h3>
            <ul className={styles.navList}>
              {navigationData.general.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`${styles.navLink} ${item.name === "Dashboard" ? styles.active : ""}`}
                  >
                    {getIcon(item.icon)}
                    <span className={styles.linkText}>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Tools</h3>
            <ul className={styles.navList}>
              {navigationData.tools.map((item, index) => (
                <li key={index}>
                  <a href="#" className={styles.navLink}>
                    {getIcon(item.icon)}
                    <span className={styles.linkText}>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
