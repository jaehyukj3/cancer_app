import { cancerRateData } from 'utils/data/rateData'

const getConvertData = (valueType: string) => {
  const rateData = cancerRateData.map((item) => {
    return {
      x: item.code.split('(')[0],
      y: item.rate,
      label: `${item.code.split('(')[0]}: ${item.rate}%`,
    }
  })
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

  if (valueType === '발생비율') return rateData
  if (valueType === '조발생률') return crData
  return asrData
}

export default getConvertData
