export type Temperature = 'ICED' | 'HOT' | 'HOT ONLY';

// 선택한 커피 type
export interface SelectCoffeeType {
  name: string;
  description: string;
  image: string;
  temperature: Temperature[];
  price: number;
}

// 커피 옵션 선택 type
export interface IsOptionType {
  temperature: string;
  take: string;
  shot: boolean;
  syrup: boolean;
  ice: boolean;
  drinkCount: number;
}

// 주문 리스트 type
export type OrderType = Omit<SelectCoffeeType, 'temperature'> & IsOptionType;
