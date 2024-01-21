import React from 'react'

interface DiscoveryProps {
  children: React.ReactNode
  params: any
}

const DiscoveryLayout = async ({ children, params }: DiscoveryProps) => {
  return <main className='flex over-hidden h-screen'>{children}</main>
}

export default DiscoveryLayout
