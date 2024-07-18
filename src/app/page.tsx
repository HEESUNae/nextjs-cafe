import { Modal } from '@/components/Modal';
import styles from './page.module.scss';
import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <Modal>
        <div className={styles.modalContainer}>
          <h2>
            휴양지에 방문한 당신,
            <br /> 수영을 즐기며 커피한잔 할 준비가 되어있나요?
          </h2>
          <Image src={'/images/woman.png'} width={300} height={300} alt="" />
          <Link href={'/main'}>
            <Button title="주문하러가기" />
          </Link>
        </div>
      </Modal>
    </main>
  );
}
