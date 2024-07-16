'use client';
import Image from 'next/image';
import styles from '../styles/page.module.scss';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import InputRadio from '@/components/InputRadio';
import InputCheckbox from '@/components/InputCheckbox';
import { Modal } from '@/components/Modal';
import { IsOptionType, OrderType, SelectCoffeeType, Temperature } from '@/types';
import { coffeeMenu } from '@/api/menu';

const tabMenus: string[] = ['커피', '음료', '스무디', '디저트', '주스'];

export default function Home() {
  const [isMenu, setIsMenu] = useState([true, ...Array.from({ length: tabMenus.length - 1 }).fill(false)]); //  메뉴 탭
  const [selectCoffee, setSelectCoffee] = useState<SelectCoffeeType | null>(null); // 선택한 커피 (모달 내용)
  const [isOption, setOption] = useState<IsOptionType>({
    temperature: '',
    take: 'take',
    shot: false,
    syrup: false,
    ice: false,
  }); // 모달에서 선택한 커피 옵션
  const [order, setOrder] = useState<OrderType[]>([]); // 주문 리스트

  // 메뉴 탭 액티브
  const handleMenuTab = (idx: number) => {
    let temp = Array.from({ length: tabMenus.length }).fill(false);
    temp[idx] = true;
    setIsMenu(temp);
  };

  // 클릭한 커피 리스트 (모달 오픈)
  const handleSelectCoffee = (
    name: string,
    description: string,
    image: string,
    temperature: Temperature[],
    price: number
  ) => {
    setSelectCoffee({ name, description, image, temperature, price }); // 클릭한 커피 모달 내용으로 보여줌
    setOption((prev) => ({ ...prev, temperature: temperature[0] })); // 온도 맨 첫번째로 디폴트 선택
  };

  // 선택한 커피 옵션값 초기화
  const headleResetOrder = () => {
    setSelectCoffee(null);
    setOption({
      temperature: '',
      take: 'take',
      shot: false,
      syrup: false,
      ice: false,
    });
  };

  // 주문 리스트에 커피 추가
  const handleOrderCoffee = () => {
    if (selectCoffee) {
      const temp: OrderType = { ...selectCoffee, ...isOption };
      setOrder((prev) => [...prev, temp]);
      headleResetOrder();
    }
  };

  return (
    <main className={styles.main}>
      <section>
        <div className={styles.menuContiner}>
          {/* 메뉴 탭 버튼 */}
          <div className={styles.menuTabBtn}>
            {tabMenus.map((menu, idx) => (
              <Button
                key={menu}
                style={isMenu[idx] ? 'menuBtnActive' : 'menuBtn'}
                title={menu}
                onClick={() => handleMenuTab(idx)}
              />
            ))}
          </div>

          {/* 메뉴 탭 컨텐츠 */}
          <div className={styles.menuTabPanel}>
            <div className={`${styles.tabpanel} ${isMenu[0] && styles.active}`}>
              <ul>
                {coffeeMenu.map((item) => (
                  <li
                    key={item.name}
                    onClick={() =>
                      handleSelectCoffee(item.name, item.description, item.image, item.temperature, item.price)
                    }
                  >
                    <Image src={item.image} width={200} height={200} priority alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${styles.tabpanel} ${isMenu[1] && styles.active}`}>음료 컨텐츠</div>
            <div className={`${styles.tabpanel} ${isMenu[2] && styles.active}`}>스무디 컨텐츠</div>
            <div className={`${styles.tabpanel} ${isMenu[3] && styles.active}`}>디저트 컨텐츠</div>
            <div className={`${styles.tabpanel} ${isMenu[4] && styles.active}`}>주스 컨텐츠</div>
          </div>
        </div>

        {/* 주문리스트 */}
        <div className={styles.orderContainer}>
          <ul className={styles.calc}>
            {order.map((item, idx) => (
              <li key={idx}>
                <h3>
                  {item.name} {item.temperature}
                </h3>
                <div className={styles.menuCountBtns}>
                  <Button title="-" style="numberBtn" />
                  <span>1</span>
                  <Button title="+" style="numberBtn" />
                </div>
                <p className={styles.price}>{item.price} 원</p>
                <p className={styles.options}>
                  {item.ice && '얼음많이(+500원),'} {item.shot && '샷 추가(+500원),'}
                  {item.syrup && '시럽추가(+500원),'} {item.take === 'take' ? '테이크아웃' : '매장'}
                </p>
              </li>
            ))}
          </ul>
          <div className={styles.totalCalc}>
            <p>총 결제 금액</p>
            <p>
              <span>
                {order
                  .map((item) => {
                    let calc = item.price;
                    if (item.ice) calc += 500;
                    if (item.shot) calc += 500;
                    if (item.syrup) calc += 500;
                    return calc;
                  })
                  .reduce((a, v) => a + v, 0)}
              </span>{' '}
              원
            </p>
          </div>
          <Button title="전체삭제" style="defaultBtn" />
          <Button title="계산하기" />
        </div>
      </section>

      {/* 커피 옵션 선택 모달 */}
      {selectCoffee && (
        <Modal>
          <h2 className={styles.modalHeader}>옵션을 선택해주세요.</h2>
          <div className={styles.modalContents}>
            <div className={styles.coffeeInfoWrap}>
              <figure>
                <Image src={selectCoffee.image} width={120} height={120} alt="" />
                <figcaption>
                  <h3>{selectCoffee.name}</h3>
                  <p>{selectCoffee.description}</p>
                  <p>{selectCoffee.price}</p>
                </figcaption>
              </figure>
            </div>
            <ul>
              <li>
                <p>온도</p>
                {selectCoffee.temperature.map((item: Temperature) => (
                  <InputRadio
                    checked={isOption.temperature === item}
                    title={item}
                    key={item}
                    onChange={() => setOption((prev) => ({ ...prev, temperature: item }))}
                  />
                ))}
              </li>
              <li>
                <p>포장</p>
                <InputRadio
                  checked={isOption.take === 'take'}
                  title="테이크아웃"
                  onChange={() => setOption((prev) => ({ ...prev, take: 'take' }))}
                />
                <InputRadio
                  checked={isOption.take === 'cafe'}
                  title="매장"
                  onChange={() => setOption((prev) => ({ ...prev, take: 'cafe' }))}
                />
              </li>
              <li>
                <p>옵션</p>
                <InputCheckbox
                  checked={isOption.shot}
                  onChange={() => setOption((prev) => ({ ...prev, shot: !prev.shot }))}
                >
                  <span>
                    샷 추가
                    <br /> (+ 500원)
                  </span>
                </InputCheckbox>
                <InputCheckbox
                  checked={isOption.syrup}
                  onChange={() => setOption((prev) => ({ ...prev, syrup: !prev.syrup }))}
                >
                  <span>
                    시럽 추가
                    <br /> (+ 500원)
                  </span>
                </InputCheckbox>
                <InputCheckbox
                  checked={isOption.ice}
                  onChange={() => setOption((prev) => ({ ...prev, ice: !prev.ice }))}
                >
                  <span>
                    얼음 많이
                    <br /> (+ 0원)
                  </span>
                </InputCheckbox>
              </li>
            </ul>
            <div className={styles.modalFooter}>
              <Button title="닫기" style="defaultBtn" onClick={headleResetOrder} />
              <Button title="담기" onClick={handleOrderCoffee} />
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}
