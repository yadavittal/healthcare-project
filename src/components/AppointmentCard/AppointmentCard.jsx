import styles from "./AppointmentCard.module.css"
import { getIcon } from "../../utils/appointmentUtils";

const SimpleAppointmentCard = ({ appointment }) => {
 
  return (
    <div className={styles.card}>
      <div className={styles.content}>      
         <div className={styles.info}>
          <h4 className={styles.title}>{appointment.title}</h4>
          <p className={styles.time}>{appointment.time}</p>
         </div>
         <span className={styles.icon}>{getIcon(appointment.type)}</span>
  
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
