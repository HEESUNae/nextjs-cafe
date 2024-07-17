import React from 'react';
import Image from 'next/image';
import { SelectCoffeeType } from '@/types';

interface MenuTabPanelProps {
  menuItem: SelectCoffeeType[];
  handleSelectCoffee: (coffeeItem: SelectCoffeeType) => void;
}

// 커피 메뉴 탭 컨텐츠
export const MenuTabPanel = ({ menuItem, handleSelectCoffee }: MenuTabPanelProps) => {
  return (
    <ul>
      {menuItem.map((item) => (
        <li key={item.name} onClick={() => handleSelectCoffee(item)}>
          <Image src={item.image} width={200} height={200} priority alt="" />
          <h3>{item.name}</h3>
          <span>{item.price.toLocaleString()} 원</span>
        </li>
      ))}
    </ul>
  );
};
