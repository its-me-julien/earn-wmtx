import type { Metadata } from 'next'
import { aeonikBold, aeonikBoldItalic, aeonikLight, aeonikLightItalic, aeonikRegular, aeonikRegularItalic } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Earn WMTx',
  description: 'Learn how to earn WMTx tokens with World Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`
      ${aeonikBold.variable} 
      ${aeonikBoldItalic.variable} 
      ${aeonikLight.variable} 
      ${aeonikLightItalic.variable} 
      ${aeonikRegular.variable} 
      ${aeonikRegularItalic.variable}
    `}>
      <body>{children}</body>
    </html>
  )
}

