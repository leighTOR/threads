
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Inter } from "next/font/google"
import '../globals.css'

export const metadata = {
    title: 'Threads',
    description: 'A Next.js 13 Meta Threads Application'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            <header>
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <main>{children}</main>
          </body>
        </html>
      </ClerkProvider>
    )
  }