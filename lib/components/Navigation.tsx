import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from '../../styles/Navigation.module.scss'

export const Navigation: React.FC = () => {
  const [selected, setSelected] = useState(0)

  return <nav className={styles.nav}>
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'linear', duration: 0.5, delay: 1 }}
      className={styles.nav__menu}
    >
      <motion.li className={`${styles.nav__cell} ${selected === 0 && styles['nav__cell-selected']}`} key={0}>
        <Link
          className={styles.nav__link}
          href="/"
          onClick={() => setSelected(0)}
        >
          Home
        </Link>
        {selected === 0 && <motion.div layoutId="underline" className={styles.nav__underline} />}
      </motion.li>
      <motion.li className={`${styles.nav__cell} ${selected === 1 && styles['nav__cell-selected']}`} key={1}>
        <Link
          className={styles.nav__link}
          href="/about"
          onClick={() => setSelected(1)}
        >
          About
        </Link>
        {selected === 1 && <motion.div layoutId="underline" className={styles.nav__underline} />}
      </motion.li>
      <motion.li className={`${styles.nav__cell} ${selected === 2 && styles['nav__cell-selected']}`} key={2}>
        <a
          className={styles.nav__link}
          href="#"
          onClick={() => setSelected(2)}
        >
          Blog
        </a>
        {selected === 2 && <motion.div layoutId="underline" className={styles.nav__underline} />}
      </motion.li>
    </motion.ul>
  </nav>
}
