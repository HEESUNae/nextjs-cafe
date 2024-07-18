import { OrderType } from '@/types';
import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const orderState = atom<OrderType[]>({
  key: 'orderList',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
