import styles from "./integracao2.module.css"

export default function integracao() {
  return (
    <div id={styles.integracao2}> 
      <div className={styles.vermelho}>Texto #01</div>
      <div className={styles.azul}>Texto #02</div>
    </div>
  )
}