import AppointmentCard from "../AppointmentCard/AppointmentCard"
import { upcomingAppointments } from "../../data/appointmentData"
import styles from "./UpcomingSchedule.module.css"

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>

      <div className={styles.scheduleList}>
        <div className={styles.daySection}>
          <h3 className={styles.dayTitle}>On Thursday</h3>
          <div className={styles.appointments}>
            {upcomingAppointments.thursday.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>

        <div className={styles.daySection}>
          <h3 className={styles.dayTitle}>On Saturday</h3>
          <div className={styles.appointments}>
            {upcomingAppointments.saturday.map((appointment, index) => (
              <AppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingSchedule
