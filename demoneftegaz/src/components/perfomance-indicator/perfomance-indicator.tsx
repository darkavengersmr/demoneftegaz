import { initialPerfomanceIndicator } from '../../store/mock-data/perfomance-indicator';

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

const lineChartData = () => {
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

const PerfomanceIndicator: React.FC = () => {
    return (
      <>
        
        <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">
            <Typography variant="h6">Добыча нефти за неделю</Typography>
            <Line                                        
                        data={lineChartData()}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            }
                          }}
            />
            <PerfomanceData data={initialPerfomanceIndicator} />
        </Container>
      </>
      )
  }
    
  export default PerfomanceIndicator;