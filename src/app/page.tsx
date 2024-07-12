'use client';
import Image from 'next/image';
import styles from '../styles/page.module.scss';
import Button from '@/components/Button';
import { useState } from 'react';

const coffeeMenu = [
  {
    name: '카페모카',
    temperature: 'ICED',
    description: '에스프레소에 부드러운 우유와 진한 초콜릿 풍미가 어우러진 커피',
    image: '/images/coffee/moca-iced.png',
  },
  {
    name: '바닐라 라떼',
    temperature: 'ICED',
    description: '에스프레소에 부드러운 우유와 달콤한 바닐라 향이 가득한 커피',
    image: '/images/coffee/moca-iced.png',
  },
  {
    name: '카라멜 마끼아또',
    temperature: 'ICED',
    description:
      '에스프레소를 바닐라 향이 가득한 부드러운 우유에 점을 찍듯이 부은 후 달콤한 카라멜 소스를 드리즐한 커피',
    image: '/images/coffee/moca-iced.png',
  },
];

const menus = ['커피', '음료', '스무디', '디저트', '주스'];

export default function Home() {
  const [isMenu, setIsMenu] = useState([true, ...Array.from({ length: menus.length - 1 }).fill(false)]);

  const handleMenuTab = (idx: number) => {
    let temp = Array.from({ length: menus.length }).fill(false);
    temp[idx] = true;
    setIsMenu(temp);
  };

  return (
    <main className={styles.main}>
      <div className={styles.menuContiner}>
        <div className={styles.menuTabBtn}>
          {menus.map((menu, idx) => (
            <Button
              key={menu}
              style={isMenu[idx] ? 'menuBtnActive' : 'menuBtn'}
              title={menu}
              onClick={() => handleMenuTab(idx)}
            />
          ))}
        </div>
        <ul>
          {coffeeMenu.map((coffee) => (
            <li key={coffee.name}>
              <Image src={coffee.image} width={200} height={200} priority alt="" />
              <p>
                {coffee.name} {coffee.temperature}
              </p>
              {/* <p>{coffee.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.calc}></div>
    </main>
  );
}
