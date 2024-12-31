import { GoogleAnalytics } from '@next/third-parties/google'
import { aeonikBold, aeonikBoldItalic, aeonikLight, aeonikLightItalic, aeonikRegular, aeonikRegularItalic } from './fonts'
import './globals.css'

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
      <body>
        {children}
        <GoogleAnalytics gaId="G-GGBKYMDYL1" />
      </body>
    </html>
  )
}
