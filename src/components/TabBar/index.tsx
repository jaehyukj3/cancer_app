import styles from './BottomTab.module.scss'

import cx from 'classnames'
import { NavLink } from 'react-router-dom'

const TabBar = () => {
  return (
    <nav className={styles.bottomTab}>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            Search
          </NavLink>
        </li>
        <li>
          <NavLink to='/cancerchart' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            Chart
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TabBar
