import { SelectCoffeeType } from '@/types';

export const coffeeMenu: SelectCoffeeType[] = [
  {
    name: '아메리카노',
    temperature: ['ICED', 'HOT'],
    description: '스페셜티 블렌드로 추출한 에스프레소를 부드럽게 즐길 수 있는 커피',
    image: '/images/coffee/americano.png',
    price: 4000,
  },
  {
    name: '카페 모카',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소에 부드러운 우유와 진한 초콜릿 풍미가 어우러진 커피',
    image: '/images/coffee/moca.png',
    price: 8000,
  },
  {
    name: '카페 라떼',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소와 부드러운 우유의 조화가 매력적인 커피',
    image: '/images/coffee/latte.png',
    price: 8000,
  },
  {
    name: '바닐라 라떼',
    temperature: ['ICED', 'HOT'],
    description: '에스프레소에 부드러운 우유와 달콤한 바닐라 향이 가득한 커피',
    image: '/images/coffee/vanillaLatte.png',
    price: 8000,
  },
  {
    name: '카라멜 마끼아또',
    temperature: ['ICED', 'HOT'],
    description:
      '에스프레소를 바닐라 향이 가득한 부드러운 우유에 점을 찍듯이 부은 후 달콤한 카라멜 소스를 드리즐한 커피',
    image: '/images/coffee/caramel.png',
    price: 8000,
  },
  {
    name: '카푸치노',
    temperature: ['HOT ONLY'],
    description: '에스프레소와 부드러운 우유 거품을 풍성하게 느낄 수 있는 커피',
    image: '/images/coffee/cappuccino.png',
    price: 6000,
  },
  {
    name: '콜드브루 바닐라 젤라또 라떼',
    temperature: ['ICED', 'HOT'],
    description: '콜드브루와 바닐라 향이 가득한 부드러운 우유, 바닐라 젤라또를 함께 즐길 수 있는 커피',
    image: '/images/coffee/vanilla.png',
    price: 8000,
  },
];

export const drinksMenu: SelectCoffeeType[] = [
  {
    name: '자몽 주스',
    temperature: ['ICED'],
    description: '새콤 쌉싸름한 자몽 본연의 맛을 느낄 수 있는 과일주스',
    image: '/images/drink/grapefruit.png',
    price: 7000,
  },
  {
    name: '키위 주스',
    temperature: ['ICED'],
    description: '상큼한 키위를 그대로 갈아 만든 과일주스',
    image: '/images/drink/kiwi.png',
    price: 7000,
  },
  {
    name: '홍시 주스',
    temperature: ['ICED'],
    description: '달콤한 홍시 본연의 맛을 느낄 수 있는 과일주스',
    image: '/images/drink/hongsi.png',
    price: 7000,
  },
];

export const adeMenu: SelectCoffeeType[] = [
  {
    name: '청포도 에이드',
    temperature: ['ICED'],
    description: '상큼한 청포도의 과육이 살아 있는 스파클링 음료',
    image: '/images/ade/grape.png',
    price: 5500,
  },
  {
    name: '레몬 에이드',
    temperature: ['ICED'],
    description: '상큼한 레몬과 탄산수가 어우러진 스파클링 음료',
    image: '/images/ade/lemon.png',
    price: 6500,
  },
  {
    name: '자몽 에이드',
    temperature: ['ICED'],
    description: '새콤 쌉싸름한 자몽과 탄산수가 어우러진 스파클링 음료',
    image: '/images/ade/grapefruit.png',
    price: 6000,
  },
];

export const teaMenu: SelectCoffeeType[] = [
  {
    name: '애플 시나몬 티',
    temperature: ['ICED', 'HOT'],
    description: '블랙티에 건조 사과와 시나몬스틱이 더해져 더욱 진하고 향기로운 티 블렌딩 음료',
    image: '/images/tea/apple.png',
    price: 6000,
  },
  {
    name: '고흥유자 차',
    temperature: ['ICED', 'HOT'],
    description: '상큼한 고흥유자의 풍미를 느낄 수 있는 과일차',
    image: '/images/tea/citron.png',
    price: 5000,
  },

  {
    name: '자몽 차',
    temperature: ['ICED', 'HOT'],
    description: '새콤 쌉싸름한 자몽의 풍미를 느낄 수 있는 과일차',
    image: '/images/tea/grapefruit.png',
    price: 4000,
  },
  {
    name: '복숭아 아이스티',
    temperature: ['ICED'],
    description: '진한 홍차 풍미와 달콤한 복숭아 향이 어우러진 시원한 음료',
    image: '/images/tea/peach.png',
    price: 6000,
  },
];
