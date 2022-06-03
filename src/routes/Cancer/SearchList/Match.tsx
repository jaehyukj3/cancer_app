import styles from './searchList.module.scss'

type TMatchProps = {
  name: string
}

const Match = ({ name }: TMatchProps) => {
  return (
    <span className={styles.name}>
      {name.split('`').map((letter, idx) => {
        const key = `${letter}-${idx}`
        return letter[0] === '|' ? <mark key={key}>{letter.split('|')[1]}</mark> : letter
      })}
    </span>
  )
}

export default Match
