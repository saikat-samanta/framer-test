import type { AppProps } from 'next/app'

// import 'node_modules/normalize.css/normalize.css'
import '../styles/globals.scss'
import { DefaultLayout } from '@/containers/DefaultLayout'

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return <DefaultLayout>
    {children}
  </DefaultLayout>
}
