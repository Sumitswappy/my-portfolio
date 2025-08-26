import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Background from '@/components/Background' 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira-code' })

export const metadata = {
  title: 'Sumit Sarkar | Software Developer',
  description: 'Portfolio of Sumit Sarkar, a final-year MCA student skilled in Java, Spring Boot, and full-stack development.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${firaCode.variable} bg-background font-sans text-text-light`}
      >
        <Background /> 
        <Navbar />
        <main className="container mx-auto max-w-5xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}