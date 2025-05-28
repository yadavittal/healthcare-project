import HealthStatusCards from "../HealthStatusCards/HealthStatus"
import { healthData } from "../../data/healthData"
import styles from "./AnatomySec.module.css"
import image from "../../../src/assets/img.png"

const AnatomySection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.anatomyContainer}>
          <img
            src={image}
            alt="Human Anatomy"
            className={styles.anatomyImage}
          />
        </div>

        <div className={styles.statusCards}>
          <HealthStatusCards healthData={healthData} />
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
