import { atom } from 'recoil'
import { ICancer } from 'types/cancer'

export const searchListState = atom<ICancer[]>({
  key: '#searchListState',
  default: [],
})

export const cancerListState = atom<ICancer[]>({
  key: '#cancerListState',
  default: [],
})

export const searchStringState = atom<string>({
  key: '#searchStringState',
  default: '',
})
