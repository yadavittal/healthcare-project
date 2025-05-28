import styles from "../components/HealthStatusCards/HealthStatus.module.css"

export const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return styles.good
      case "warning":
        return styles.warning
      case "critical":
        return styles.critical
      default:
        return styles.default
    }
  }

export  const getIcon = (type) => {
    switch (type) {
      case "lungs":
        return "🫁"
      case "teeth":
        return "🦷"
      case "bone":
        return "🦴"
      default:
        return "❤️"
    }
  }
