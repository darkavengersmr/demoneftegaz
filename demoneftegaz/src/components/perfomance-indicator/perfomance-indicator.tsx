import { dateNow } from '../../helpers/helpers'

import { Container, Typography } from '@mui/material';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Line } from 'react-chartjs-2'
import PerfomanceData from './perfomance-data';
import { IPerfomanceIndicatorData, IProductionData } from '../../interfaces/interfaces';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

type chartDataType = {
    labels: string[],
    datasets: {
        data: number[]
        label: string
        borderColor: string,
        fill: boolean,
        lineTension: number
    }[]
}

const lineChartData = (initialPerfomanceIndicator: IPerfomanceIndicatorData) => {
    const chartData: chartDataType = {
        labels: initialPerfomanceIndicator.days,
        datasets: []
    }
    for (let i=0; i<8; i++) {
        chartData.datasets.push({
            data: initialPerfomanceIndicator.data[i].params,
            label: initialPerfomanceIndicator.data[i].title,
            borderColor: initialPerfomanceIndicator.data[i].color,
            fill: true,
            lineTension: 0.5
        })
    }

    return chartData
}


type MainPageProps = {
    initialPerfomanceIndicator: IPerfomanceIndicatorData
    initialProductionData: IProductionData[]
}

const PerfomanceIndicator = ({initialPerfomanceIndicator, initialProductionData}: MainPageProps) => {
    return (
      <>
        
        <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">
            <Typography variant="h6">Добыча нефти за неделю {dateNow(-6)}-{dateNow(0)}</Typography>
            <Line                                        
                        data={lineChartData(initialPerfomanceIndicator)}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            }
                          }}
            />
            <PerfomanceData data={initialProductionData} />
        </Container>
      </>
      )
  }
    
  export default PerfomanceIndicator;