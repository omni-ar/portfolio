// app/layout.js

import './globals.css'

export const metadata = {
  title: 'Arjit | Portfolio',
  description: 'Personal portfolio built with Next.js and Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  )
}
