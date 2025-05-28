import styles from "./HealthStatus.module.css"
import {getStatusColor,getIcon} from "../../utils/healthStatus"

const HealthStatusCards = ({ healthData }) => {
 
  return (
    <div className={styles.container}>
      {healthData.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.header}>
            <span className={styles.icon}>{getIcon(item.type)}</span>
            <div className={styles.info}>
              <h3 className={styles.title}>{item.type}</h3>
              <p className={styles.date}>{item.date}</p>
            </div>
          </div>

          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={`${styles.progress} ${getStatusColor(item.status)}`}
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
          <div className={styles.footer}>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCards
