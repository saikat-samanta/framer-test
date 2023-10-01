import React from 'react'
import styles from '../../styles/PageLayout.module.scss'

import { PT_Sans } from '@next/font/google'
import { TransitionLayout } from './TransitionLayout'
const ptSans = PT_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={ptSans.className}>
      <body className={styles.body}>
        <TransitionLayout>
        {children}
        </TransitionLayout>
      </body>
    </html>
  )
}
