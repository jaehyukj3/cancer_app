import { useRecoilValue } from 'recoil'

import { ICancer } from 'types/cancer'
import { cancerListState } from 'recoil/cancer'
import styles from './resultList.module.scss'

const ResultList = () => {
  const cancerList = useRecoilValue(cancerListState)

  return (
    <ul className={styles.resultList}>
      {cancerList.map((item: ICancer, idx: number) => {
        const key = `${item.CANCER_NAME}-${idx}`
        return (
          <li key={key}>
            <dl>
              <div className={styles.contentWrapper}>
                <dt>암종명(CANCER_NAME)</dt>
                <dd>{item.CANCER_NAME}</dd>
              </div>

              <div className={styles.contentWrapper}>
                <dt>암종분류(CANCER_PART)</dt>
                <dd>{item.CANCER_PART}</dd>
              </div>

              <div className={styles.contentWrapper}>
                <dt>암종연령대(CANCER_AGE)</dt>
                <dd>{item.CANCER_AGE}</dd>
              </div>
            </dl>
          </li>
        )
      })}
    </ul>
  )
}

export default ResultList
