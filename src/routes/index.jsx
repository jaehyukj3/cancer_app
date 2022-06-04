import { Routes, Route } from 'react-router-dom'

import TabBar from 'components/TabBar'
import Cancer from './Cancer'
import CancerChart from './CancerChart'
import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Cancer />} />
          <Route path='/cancerchart' element={<CancerChart />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
        <TabBar />
      </div>
    </div>
  )
}

export default App
