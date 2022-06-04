import Chart from './Chart'
import styles from './cancerChart.module.scss'
import { useState } from 'react'

const CancerChart = () => {
  const [valueType, setValueType] = useState<string>('발생비율')

  const handleRateClick = () => {
    setValueType('발생비율')
  }
  const handleCrClick = () => {
    setValueType('조발생률')
  }
  const handleAsrClick = () => {
    setValueType('연령표준화발생률')
  }
  return (
    <main className={styles.cancerChart} id='main'>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>암 차트</h1>
      </header>
      <Chart valueType={valueType} />
      <p className={styles.chartName}>{valueType} 차트</p>
      <div className={styles.buttonWrapper}>
        <button type='button' onClick={handleRateClick}>
          <p>발생비율</p>
        </button>
        <button type='button' onClick={handleCrClick}>
          <p>조발생률</p>
        </button>
        <button type='button' onClick={handleAsrClick}>
          <p>연령표준화</p> <p>발생률</p>
        </button>
      </div>
    </main>
  )
}

export default CancerChart
