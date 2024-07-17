import { OrderType } from '@/types';
import React from 'react';
import styles from './orderList.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';

interface OrderListProps {
  order: OrderType[];
  handleMenuCount: (item: OrderType, someIdx: number, state: string) => void;
}

// 주문 리스트
export const OrderList = ({ order, handleMenuCount }: OrderListProps) => {
  return (
    <>
      {order.length === 0 && (
        <div className={styles.defaultOrderList}>
          <Image src={'/images/mug.png'} width={60} height={60} alt="" />
          <p>주문 리스트가 비었습니다.</p>
        </div>
      )}
      {order.map((item, idx) => (
        <li key={idx}>
          <h3>
            {item.name} {item.temperature}
          </h3>
          <div className={styles.menuCountBtns}>
            <Button title="-" style="numberBtn" onClick={() => handleMenuCount(item, idx, 'decrease')} />
            <span>{item.drinkCount}</span>
            <Button title="+" style="numberBtn" onClick={() => handleMenuCount(item, idx, 'increase')} />
          </div>
          <p className={styles.price}>{item.price.toLocaleString()} 원</p>
          <p className={styles.options}>
            {item.ice && '얼음많이(+0원),'} {item.shot && '샷 추가(+500원),'}
            {item.syrup && '시럽추가(+500원),'} {item.take === 'take' ? '테이크아웃' : '매장'}
          </p>
        </li>
      ))}
    </>
  );
};
