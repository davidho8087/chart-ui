import BarChart2 from '@/components/discovery/bar-chart2'
import CreateChart from '@/components/discovery/createChart'
import React from 'react'

function DiscoveryPage() {
  return (
    <>
      <div className='flex flex-col items-center p-24 gap-10 '>
        <h1 className='text-6xl'>Discovery</h1>
        {/*<CreateChart />*/}
        <BarChart2 />
        <h1 className='text-6xl'>Discovery</h1>
      </div>
    </>
  )
}

export default DiscoveryPage
