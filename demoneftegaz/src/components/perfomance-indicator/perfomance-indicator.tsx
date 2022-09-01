import { initialPerfomanceIndicator } from '../../store/mock-data/mock-data';

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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const lineChartData = {
labels: initialPerfomanceIndicator.days,
datasets: [
    {
    data: initialPerfomanceIndicator.dng1,
    label: "ПДНГ1",
    borderColor: "#0000ff",
    fill: true,
    lineTension: 0.5
    },
    {
    data: initialPerfomanceIndicator.dng2,
    label: "ДДНГ2",
    borderColor: "#00ff00",
    fill: true,
    lineTension: 0.5
    },
    {
    data: initialPerfomanceIndicator.dng3,
    label: "ДДНГ3",
    borderColor: "#ff0000",
    fill: true,
    lineTension: 0.5
    },
    {
    data: initialPerfomanceIndicator.dng4,
    label: "ПДНГ4",
    borderColor: "#00ffff",
    fill: true,
    lineTension: 0.5
    },
]
}

const PerfomanceIndicator: React.FC = () => {
    return (
      <>
        
        <Container sx={{ mt: "1rem", mb: "2rem", width: "100%" }} maxWidth="sm">
            <Typography variant="h6">Добыча нефти за неделю</Typography>
            <Line                                        
                        data={lineChartData}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            }
                          }}
            />
        </Container>
      </>
      )
  }
    
  export default PerfomanceIndicator;