"use client"
import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components';
import Image from 'next/image'
import { facebookLogo, githubLogo } from '@/assets/images';
import { Providers } from '@/redux/Providers';
import { openNewPage } from '@/utils';


const inter = Inter({ subsets: ['latin'] });

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const handleFooterClick = (url: string) => {
    openNewPage(url)
  }
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Lợi Phan</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider enableSystem={true} attribute="class">
            <div
              className="dark:bg-dark-bg dark:text-dark-text"
            >
              <div
                className="md:mx-auto max-w-[1160px] min-h-screen w-[100%]  md:py-[48px]
                px-[16px] md:px-[30px] box-border 2xl:px-[32px] "
              >
                <Navbar></Navbar>

                <section
                  className="w-auto min-h-full"
                >
                  {children}
                </section>

                <footer
                  className="flex w-[100%] mt-[80px] py-[48px] md:py-0 box-border h-fit flex-col justify-center items-center"
                >
                  <ul
                    className="flex flex-row gap-3"
                  >
                    <li
                      className="flex flex-row items-center gap-2 hover:cursor-pointer"
                      onClick={() => handleFooterClick("https://github.com/Loiphan1003")}
                    >
                      <p>
                        GitHub
                      </p>

                      <Image
                        src={githubLogo}
                        alt='GitHub'
                      />
                    </li>
                    <li
                      className="flex flex-row items-center gap-2 hover:cursor-pointer"
                      onClick={() => handleFooterClick("https://www.facebook.com/profile.php?id=100004241627166")}
                    >
                      <p>
                        Facebook
                      </p>

                      <Image
                        src={facebookLogo}
                        alt='Facebook'
                      />
                    </li>
                  </ul>
                  <p className="mt-[20px]">Made by Loi Phan.</p>
                </footer>
              </div>
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout;