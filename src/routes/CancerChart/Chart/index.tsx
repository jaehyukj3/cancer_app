import { VictoryChart, VictoryTheme, VictoryTooltip, VictoryBar, VictoryAxis } from 'victory'

import getConvertData from '../_utils/convertCancerData'

interface IProps {
  valueType: string
}

const Chart = ({ valueType }: IProps) => {
  const chartData = getConvertData(valueType)

  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        height={500}
      >
        <VictoryAxis
          tickFormat={(datum, index) => {
            if (index % 5 !== (chartData.length - 1) % 5) return ''
            return `${datum}`
          }}
          style={{
            ticks: { stroke: 'transparent' },
            grid: { stroke: 'transparent' },
            tickLabels: { fontSize: 12, padding: 5, fill: '#94a2ad' },
          }}
        />

        <VictoryBar
          data={chartData}
          style={{
            data: {
              fill: '#3e498c',
              stroke: 'transparent',
              strokeWidth: 3,
            },
            labels: { fill: 'white', fontSize: '14px', fontWeight: 'bold' },
          }}
          barWidth={6}
          labelComponent={
            <VictoryTooltip
              cornerRadius={5}
              flyoutStyle={{ fill: '#3e498c' }}
              flyoutWidth={160}
              flyoutHeight={40}
              flyoutPadding={5}
            />
          }
        />
      </VictoryChart>
    </div>
  )
}

export default Chart
