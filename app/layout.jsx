"use client"
import React from 'react'
import "@styles/globals.css"
import { SessionProvider } from "next-auth/react"
import Nav from "@components/Nav"
const main = ({children,session,...pageProps}) => {
  return (
    <html>
        <body>
        <SessionProvider session={session}>
            <Nav/>
            {children}
        </SessionProvider>

        </body>
    </html>
  )
}

export default main