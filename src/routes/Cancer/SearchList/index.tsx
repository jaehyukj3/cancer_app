import { MouseEvent } from 'react'
import { useRecoilValue, useRecoilState } from 'hooks/state'

import { searchListState, searchStringState } from 'recoil/cancer'
import { ICancer } from 'types/cancer'
import Match from './Match'
import styles from './searchList.module.scss'

const SearchList = () => {
  const [searchString, setSearchString] = useRecoilState<string>(searchStringState)
  const searchList = useRecoilValue(searchListState)

  const isListVisible = searchString.length !== 0 ? 'flex' : 'none'

  const onClick = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget.dataset.name as string
    setSearchString(target.replaceAll('`', '').replaceAll('|', ''))
  }

  return (
    <ul role='menu' className={styles.listContainer} style={{ display: isListVisible }}>
      {searchList?.map((item: ICancer, idx: number) => {
        const key = `${item.CANCER_NAME}-${idx}`
        return (
          <li key={key} role='menuitem' onClick={onClick} data-name={item.CANCER_NAME} className={styles.item}>
            <Match name={item.CANCER_NAME} />
          </li>
        )
      })}
    </ul>
  )
}

export default SearchList
