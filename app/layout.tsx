"use client"
import '@/app/globals.css';
import React from 'react'
import { ThemeProvider } from 'next-themes';
import { Reveal } from '@/app/components';
import { Navbar } from '@/app/components/ui/Navbar';
import StoreProvider from '@/lib/StoreProvider';
import { inter } from './components/ui/fonts';
import { cn } from '@/lib/utils';



function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <title>Lợi Phan</title>
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <StoreProvider>
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme='system'
            disableTransitionOnChange
          >
            <div
              className="dark:bg-dark-bg dark:text-dark-text h-auto relative"
            >
              <Reveal>
                <Navbar />
              </Reveal>
              <div
                className="container mx-auto w-screen h-fit px-4 md:px-0"
              >
                {children}
              </div>

              <footer
                className="w-screen h-fit  py-5 bottom-0 dark:bg-dark-cardBackgroundColor mt-[80px] flex-col justify-center items-center"
              >
                <p className="text-sm text-center leading-5 font-normal">Made by Lợi Phan.</p>
              </footer>
            </div>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

export default RootLayout;