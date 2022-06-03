import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'hooks/state'

import { searchListState, searchStringState } from 'recoil/cancer'
import { createFuzzyMatcher, cancerData } from 'utils'

export const useFuzzyStringMatching = () => {
  const setSearchList = useSetRecoilState(searchListState)
  const searchString = useRecoilValue(searchStringState)

  useEffect(() => {
    if (!searchString) return

    const regex = createFuzzyMatcher(searchString.trim().replaceAll(' ', '').toLowerCase())

    const resultData = cancerData
      .filter((row) => {
        return regex.test(row.CANCER_NAME)
      })
      .map((row) => {
        return {
          CANCER_PART: row.CANCER_PART,
          CANCER_AGE: row.CANCER_AGE,
          CANCER_NAME: row.CANCER_NAME.replace(regex, (match, ...groups) => {
            const letters = groups.slice(0, groups.length - 2)
            let lastIndex = 0
            const highlighted = []
            for (let i = 0, l = letters.length; i < l; i += 1) {
              const idx = match.indexOf(letters[i], lastIndex)
              highlighted.push(match.substring(lastIndex, idx))
              highlighted.push('`')
              highlighted.push(`|${letters[i]}|`)
              highlighted.push('`')
              lastIndex = idx + 1
            }

            return highlighted.join('')
          }),
        }
      })
    setSearchList(resultData)
  }, [searchString, setSearchList])
}
