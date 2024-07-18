import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './orderComplate.module.scss';

export default function OrderComplate() {
  return (
    <main className={styles.contents}>
      <Image src={'/images/complate.webp'} width={370} height={300} alt="" />
      <h2>주문이 완료 되었습니다.</h2>
      <Link href={'/main'}>
        <Button title="이전 화면으로 이동하기" />
      </Link>
    </main>
  );
}
