import { cancerRateData } from 'utils/data/rateData'

const getConvertData = (valueType: string) => {
  const crData = cancerRateData.map((item) => {
    return {
      x: item.code.split('(')[0],
      y: item.crude_incidence_rate,
      label: `${item.code.split('(')[0]}: ${item.crude_incidence_rate}%`,
    }
  })
  const asrData = cancerRateData.map((item) => {
    return {
      x: item.code.split('(')[0],
      y: item.age_standardized_rate,
      label: `${item.code.split('(')[0]}: ${item.age_standardized_rate}%`,
    }
  })

  if (valueType === '연령표준화발생률') return asrData
  return crData
}

export default getConvertData
