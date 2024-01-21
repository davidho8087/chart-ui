'use client'
import { data, options } from '@/dataSets'

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js'
import React from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

function BarChart2() {
  return (
    <div className='h-1/2'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart2
