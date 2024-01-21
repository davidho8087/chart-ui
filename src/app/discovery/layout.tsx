import React from 'react'

interface DiscoveryProps {
  children: React.ReactNode
  params: any
}

const DiscoveryLayout = async ({ children, params }: DiscoveryProps) => {
  return (
    <main className='flex over-hidden min-h-screen max-w-5xl m-auto justify-center'>
      {children}
    </main>
  )
}

export default DiscoveryLayout
