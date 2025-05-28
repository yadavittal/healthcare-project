 import styles from "../components/AppointmentCard/AppointmentCard.module.css"


export const getIconColor = (type) => {
  switch (type) {
    case "checkup":
      return styles.checkup;
    case "specialist":
      return styles.specialist;
    case "cardiology":
      return styles.cardiology;
    case "neurology":
      return styles.neurology;
    default:
      return styles.default;
  }
};

export const getIcon = (type) => {
  switch (type) {
    case "checkup":
      return "💉";
    case "specialist":
      return "👁️";
    case "cardiology":
      return "❤️";
    case "neurology":
      return "🧠";
    default:
      return "📋";
  }
};
