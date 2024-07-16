import { SelectCoffeeType } from '@/types';

export const coffeeMenu: SelectCoffeeType[] = [
  {
    name: '아메리카노',
    temperature: ['ICED', 'HOT'],
    description: '스페셜티 블렌드로 추출한 에스프레소를 부드럽게 즐길 수 있는 커피',
    image: '/images/coffee/americano.png',
    price: 10000,
  },
  {
    name: '카페 모카',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소에 부드러운 우유와 진한 초콜릿 풍미가 어우러진 커피',
    image: '/images/coffee/moca.png',
    price: 12000,
  },
  {
    name: '카페 라떼',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소와 부드러운 우유의 조화가 매력적인 커피',
    image: '/images/coffee/latte.png',
    price: 13000,
  },
  {
    name: '바닐라 라떼',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소에 부드러운 우유와 달콤한 바닐라 향이 가득한 커피',
    image: '/images/coffee/vanilla.png',
    price: 14000,
  },
  {
    name: '카라멜 마끼아또',
    temperature: ['ICED', 'HOT'],
    description:
      '에스프레소를 바닐라 향이 가득한 부드러운 우유에 점을 찍듯이 부은 후 달콤한 카라멜 소스를 드리즐한 커피',
    image: '/images/coffee/caramel.png',
    price: 12000,
  },
  {
    name: '카푸치노',
    temperature: ['HOT ONLY'],
    description: '에스프레소와 부드러운 우유 거품을 풍성하게 느낄 수 있는 커피',
    image: '/images/coffee/cappuccino.png',
    price: 11000,
  },
];
