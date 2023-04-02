import Header from '@/components/Header'
import './globals.css'
export const metadata = {
  title: 'IMDB Clone',
  description: 'This is the IMDB clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body>
        {/* Header */}
        <Header />



        {/* Navbar */}


        {/* SearchBox */}


        {children}

      </body>
    </html>
  )
}
