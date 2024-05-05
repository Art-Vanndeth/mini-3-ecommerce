'use client'

import React from 'react'
import SessionProvider from "@/app/SessionProvider";

const SessionWrapper = ({children}: {children: React.ReactNode}) => {
 return (
   <SessionProvider>{children}</SessionProvider>
 )
}

export default SessionWrapper