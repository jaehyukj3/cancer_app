import { VictoryChart, VictoryTheme, VictoryTooltip, VictoryBar, VictoryAxis, VictoryLabel } from 'victory'

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
        domainPadding={{ x: 10 }}
      >
        <VictoryAxis
          tickFormat={(datum, index) => {
            if (index % 5 !== (chartData.length - 1) % 5) return ''
            return `${datum}`
          }}
          style={{
            ticks: { stroke: 'none' },
            grid: { stroke: 'none' },
            tickLabels: { fontSize: 12, padding: 5, fill: '#919296' },
          }}
        />

        <VictoryAxis
          dependentAxis
          tickLabelComponent={<VictoryLabel dx={-10} />}
          orientation='left'
          tickFormat={(datum) => {
            return `${datum}%`
          }}
          style={{
            axis: { display: 'none' },
            ticks: { display: 'none' },
            grid: { stroke: 'none' },
            tickLabels: { fontSize: 12, padding: 5, fill: '#919296' },
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
            labels: { fill: 'white', fontSize: '14px' },
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
