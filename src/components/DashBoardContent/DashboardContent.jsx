import AnatomySection from "../AnatomySection/AnatomySec"
import CalendarView from "../CalendarView/CalendarView"
import UpcomingSchedule from "../UpcomingSchedule/UpcomingSchedule"
import ActivityFeed from "../ActivityFeed/Activity"
import styles from "./DashBoardContent.module.css"


function DashBoardContent() {

   return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
      </div>

      <div className={styles.topSection}>
        <div className={styles.anatomyContainer}>
          <AnatomySection />
        </div>
        <div className={styles.calendarContainer}>
          <CalendarView />
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.scheduleContainer}>
          <UpcomingSchedule />
        </div>
        <div className={styles.activityContainer}>
          <ActivityFeed />
        </div>
      </div>
    </main>
  )
}

export default DashBoardContent

