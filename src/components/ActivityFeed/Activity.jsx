import React from "react"
import { activityData } from "../../data/activityData"
import styles from "./Activity.module.css"

const ActivityFeed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activity</h2>
        <p className={styles.subtitle}>3 appointments on this week</p>
      </div>

      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          {activityData.map((day, index) => (
            <div key={index} className={styles.dayColumn}>
              <div className={styles.bars}>
                {day.values.map((value, valueIndex) => (
                  <div
                    key={valueIndex}
                    className={`${styles.bar} ${value.color === "bg-cyan-400" ? styles.cyan : styles.blue}`}
                    style={{ height: `${value.height}px` }}
                  ></div>
                ))}
              </div>
              <span className={styles.dayLabel}>{day.day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityFeed
