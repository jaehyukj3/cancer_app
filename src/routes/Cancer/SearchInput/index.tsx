import { ChangeEvent, FormEvent } from 'react'
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'hooks/state'

import SearchList from '../SearchList'
import { MagnifierIcon } from 'assets'
import { searchListState, searchStringState, cancerListState } from 'recoil/cancer'
import { useFuzzyStringMatching } from 'hooks/useFuzzyStringMatching'
import styles from './searchInput.module.scss'

const SearchInput = () => {
  const [searchString, setSearchString] = useRecoilState<string>(searchStringState)
  const searchList = useRecoilValue(searchListState)
  const setResultList = useSetRecoilState(cancerListState)
  useFuzzyStringMatching()

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()

    setResultList(
      searchList.map((row) => {
        return {
          CANCER_PART: row.CANCER_PART,
          CANCER_AGE: row.CANCER_AGE,
          CANCER_NAME: row.CANCER_NAME.replaceAll('`', '').replaceAll('|', ''),
        }
      })
    )
    const element = document.getElementById('resultWrapper')
    if (element) element.scrollTop = 0
    setSearchString('')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value)
    const element = document.getElementById('listContainer')
    if (element) element.scrollTop = 0
  }

  return (
    <div className={styles.searchInput}>
      <form className={styles.inputContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder='검색어를 입력해 주세요.'
          value={searchString}
          onChange={onChange}
        />
        <button type='submit' className={styles.button}>
          <MagnifierIcon />
        </button>
      </form>
      <SearchList />
    </div>
  )
}

export default SearchInput
