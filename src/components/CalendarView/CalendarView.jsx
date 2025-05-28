import { calendarData } from "../../data/calendarData"
import styles from "./CalendarView.module.css"

const CalendarView = () => {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerInfo}>
          <p className={styles.weekLabel}>This Week</p>
          <h2 className={styles.monthTitle}>October 2021</h2>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navButton}>←</button>
          <button className={styles.navButton}>→</button>
        </div>
      </div>

      <div className={styles.calendar}>
        <div className={styles.weekDays}>
          {daysOfWeek.map((day) => (
            <div key={day} className={styles.weekDay}>
              {day}
            </div>
          ))}
        </div>

        <div className={styles.calendarGrid}>
          {calendarData.days.map((day, index) => (
            <div key={index} className={styles.calendarDay}>
              <div className={`${styles.dayNumber} ${day.isToday ? styles.today : ""}`}>{day.date}</div>
              {day.appointments.map((time, timeIndex) => (
                <div key={timeIndex} className={styles.appointment}>
                  {time}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.appointmentCards}>
        <div className={styles.dentistCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>Dentist</h3>
              <p className={styles.cardTime}>09:00-11:00</p>
              <p className={styles.cardDoctor}>Dr. Cameron Williamson</p>
            </div>
            <span className={styles.cardIcon}>🦷</span>
          </div>
        </div>

        <div className={styles.physioCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardInfo}>
              <h3 className={styles.cardTitle}>Physiotherapy Appointment</h3>
              <p className={styles.cardTime}>11:00-12:00</p>
              <p className={styles.cardDoctor}>Dr. Kevin Djones</p>
            </div>
            <span className={styles.cardIcon}>💪</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarView
