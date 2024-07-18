'use client';
import React from 'react';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import styles from './orderConfirm.module.scss';
import { orderState } from '@/store/orderAtom';
import Link from 'next/link';
import Button from '@/components/Button';

export default function OrderConfirm() {
  const order = useRecoilValue(orderState);
  return (
    <div className={styles.main}>
      <div className={styles.contentsWrap}>
        <h2>주문이 완료 되었습니다.</h2>
        <div className={styles.orderListWrap}>
          <ul>
            {order.map((item, idx) => (
              <li key={idx}>
                <Image src={item.image} width={100} height={100} alt="" />
                <div>
                  <h3>
                    {item.name} {item.temperature} X {item.drinkCount}
                  </h3>
                  <p className={styles.options}>
                    {item.ice && '얼음많이(+0원),'} {item.shot && '샷 추가(+500원),'}
                    {item.syrup && '시럽추가(+500원),'} {item.take === 'take' ? '테이크아웃' : '매장'}
                  </p>
                  <p className={styles.price}>{item.price.toLocaleString()} 원</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Link href={'/'}>
          <Button title="처음 화면으로 이동하기" />
        </Link>
      </div>
    </div>
  );
}
