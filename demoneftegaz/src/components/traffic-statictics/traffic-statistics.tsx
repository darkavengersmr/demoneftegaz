import { dateNow } from '../../helpers/helpers'

import { Container, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { ITrafficStatistics } from '../../interfaces/interfaces';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend    
)

type chartDataType = {
    labels: string[],
    datasets: {
        data: number[]
        label: string
        backgroundColor: string,
    }[]
}

const lineChartData = (trafficStatistics: ITrafficStatistics) => {
    const chartData: chartDataType = {
        labels: trafficStatistics.days,
        datasets: []
    }
    for (let i=0; i<3; i++) {
        chartData.datasets.push({
            data: trafficStatistics.data[i].params,
            label: trafficStatistics.data[i].title,
            backgroundColor: trafficStatistics.data[i].color,
        })
    }

    return chartData
}

type TrafficStatisticsProps = {
    trafficStatistics: ITrafficStatistics
}

const TrafficStatistics = ({trafficStatistics}: TrafficStatisticsProps) => {
    return (
      <>
        
        <Container sx={{ mt: "3rem", mb: "2rem" }}>
            <Typography variant="h5" sx={{mb: 1}}>
                Статистика посещаемости за {dateNow(-6)}-{dateNow(0)}
                </Typography>
            <Bar                                        
                        data={lineChartData(trafficStatistics)}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            },
                            scales: {
                                x: {
                                  stacked: true,
                                },
                                y: {
                                  stacked: true,
                                },
                              },
                          }}
            />            
        </Container>
      </>
      )
  }
    
  export default TrafficStatistics;