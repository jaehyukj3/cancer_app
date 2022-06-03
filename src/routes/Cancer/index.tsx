import SearchInput from './SearchInput'
import ResultList from './ResultList'
import styles from './cancer.module.scss'

const Cancer = () => {
  return (
    <main className={styles.cancer} id='main'>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>암 검색</h1>
      </header>
      <SearchInput />
      <div className={styles.resultWrapper}>
        <ResultList />
      </div>
    </main>
  )
}

export default Cancer
