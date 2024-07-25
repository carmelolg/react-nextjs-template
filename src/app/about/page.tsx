import styles from "./../../styles/page.module.css"

export default function About() {

  var title = 'This is what a second page in this project'
  var subtitle = 'looks like!'

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        {title}&nbsp;<code className={styles.code}>{subtitle}</code>
        </p>
      </div>
    </main>
  );
}
