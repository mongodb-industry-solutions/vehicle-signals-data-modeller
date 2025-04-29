import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vehicle Data Modeler',
  description: 'A web application for modeling vehicle data based on COVESA Vehicle Signal Specification',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
