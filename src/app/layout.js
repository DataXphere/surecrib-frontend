import './globals.css'
import { Inter, Permanent_Marker } from 'next/font/google'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })
// const permanent = Permanent_Marker({ subsets: ['latin'] }, { weight: '400' })

export const metadata = {
  title: 'SureCrib',
  description: `Student's Housefinder`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav></Nav>
        {children}
        </body>
    </html>
  )
}
