'use client';
import styles from './main.module.scss';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import { IsOptionType, OrderType, SelectCoffeeType } from '@/types';
import { adeMenu, coffeeMenu, drinksMenu, teaMenu } from '@/api/menu';
import { CoffeeOptionModal } from '@/containers/CoffeeOptionModal';
import { MenuTabPanel } from '@/containers/MenuTabPanel';
import { OrderList } from '@/containers/OrderList';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { orderState } from '@/store/orderAtom';

const tabMenus: string[] = ['커피', '주스', '에이드', '티'];

export default function Main() {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState<boolean[]>([true, false, false, false]); //  메뉴 탭
  const [selectCoffee, setSelectCoffee] = useState<SelectCoffeeType | null>(null); // 선택한 커피 (모달 내용)
  const [isOption, setOption] = useState<IsOptionType>({
    temperature: '',
    take: 'take',
    shot: false,
    syrup: false,
    ice: false,
    drinkCount: 1,
  }); // 모달에서 선택한 커피 옵션
  const [orders, setOrders] = useRecoilState<OrderType[]>(orderState); // 주문 리스트

  /**
   * 메뉴 탭 액티브
   * @param idx 활성화 된 탭의 idx
   */
  const handleMenuTab = (idx: number) => {
    let temp = [false, false, false, false];
    temp[idx] = true;
    setIsMenu(temp);
  };

  /**
   * 클릭한 커피 리스트 (클릭하면 값이 담겨서 모달 오픈)
   * @param selectItem: 선택한 커피 리스트
   */
  const handleSelectCoffee = (selectItem: SelectCoffeeType) => {
    setSelectCoffee(selectItem); // 클릭한 커피 모달 내용으로 보여줌
    setOption((prev) => ({ ...prev, temperature: selectItem.temperature[0] })); // 온도 맨 첫번째로 디폴트 선택
  };

  /**
   * 커피 옵션값 초기화
   */
  const headleResetOption = () => {
    setSelectCoffee(null);
    setOption({
      temperature: '',
      take: 'take',
      shot: false,
      syrup: false,
      ice: false,
      drinkCount: 1,
    });
  };

  /**
   * 주문 리스트에 커피 추가
   */
  const handleOrderCoffee = () => {
    if (selectCoffee) {
      // 주문 금액 계산
      let calcPrice: number = selectCoffee.price; // 기본 커피 금액
      if (isOption.shot) calcPrice += 500;
      if (isOption.syrup) calcPrice += 500;

      // 주문리스트에 같은 옵션의 주문이 있는지 확인
      const someIdx = orders.findIndex(
        (item) =>
          item.name === selectCoffee.name &&
          item.ice === isOption.ice &&
          item.shot === isOption.shot &&
          item.syrup === isOption.syrup &&
          item.take === isOption.take &&
          item.temperature === isOption.temperature
      );

      if (someIdx > -1) {
        // 기존 주문에 추가
        setOrders((prev) => {
          const updatedOrder = [...prev];
          updatedOrder[someIdx] = {
            ...updatedOrder[someIdx],
            drinkCount: updatedOrder[someIdx].drinkCount + 1,
          };
          return updatedOrder;
        });
      } else {
        // 주문리스트에 주문 내용 추가
        const newOrder = { ...selectCoffee, ...isOption, price: calcPrice };
        setOrders((prev) => [...prev, newOrder]);
      }
      headleResetOption();
    }
  };

  /**
   * 주문 리스트 계산
   * @param item 커피를 +,- 버튼을 눌러 추가주문 할 경우 대상이 되는 아이템
   * @param someIdx 주문한 메뉴가 이미 주문리스트에 있는 경우 idx 반환
   * @param state 'increase' 추가, 'decrease' 삭제
   * @returns
   */
  const handleMenuCount = (item: OrderType, someIdx: number, state: string) => {
    // 0 일떄 주문리스트에서 삭제
    if (state === 'decrease' && item.drinkCount - 1 === 0) {
      setOrders(orders.filter((order) => order !== item));
      return;
    }

    // 주문리스트에서 커피 추가/삭제시 가격 변경
    setOrders((prev) => {
      const updatedOrder = [...prev];
      updatedOrder[someIdx] = {
        ...updatedOrder[someIdx],
        drinkCount: state === 'increase' ? updatedOrder[someIdx].drinkCount + 1 : updatedOrder[someIdx].drinkCount - 1,
        price:
          state === 'increase'
            ? (item.price / item.drinkCount) * (item.drinkCount + 1)
            : (item.price / item.drinkCount) * (item.drinkCount - 1),
      };
      return updatedOrder;
    });
  };

  /**
   * 총 결제 금액 계산
   * @returns
   */
  const calcTotalPrice = () => {
    return orders
      .map((item) => item.price)
      .reduce((a, v) => a + v, 0)
      .toLocaleString();
  };

  // 페이지 로드시 주문리스트 초기화
  useEffect(() => {
    setOrders([]);
  }, []);

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
              <MenuTabPanel menuItem={coffeeMenu} handleSelectCoffee={handleSelectCoffee} />
            </div>
            <div className={`${styles.tabpanel} ${isMenu[1] && styles.active}`}>
              <MenuTabPanel menuItem={drinksMenu} handleSelectCoffee={handleSelectCoffee} />
            </div>
            <div className={`${styles.tabpanel} ${isMenu[2] && styles.active}`}>
              <MenuTabPanel menuItem={adeMenu} handleSelectCoffee={handleSelectCoffee} />
            </div>
            <div className={`${styles.tabpanel} ${isMenu[3] && styles.active}`}>
              <MenuTabPanel menuItem={teaMenu} handleSelectCoffee={handleSelectCoffee} />
            </div>
          </div>
        </div>

        {/* 주문리스트 */}
        <div className={styles.orderContainer}>
          <ul className={styles.calc}>
            <OrderList handleMenuCount={handleMenuCount} />
          </ul>
          <div className={styles.totalCalc}>
            <p>총 결제 금액</p>
            <p>
              <span>{calcTotalPrice()}</span> 원
            </p>
          </div>
          <Button title="전체삭제" style="defaultBtn" onClick={() => setOrders([])} />
          <Button
            title="주문하기"
            onClick={() => {
              if (orders.length === 0) return alert('상품을 담아주세요');
              router.push('/orderConfirm');
            }}
          />
        </div>
      </section>

      {/* 커피 옵션 선택 모달 */}
      {selectCoffee && (
        <CoffeeOptionModal
          selectCoffee={selectCoffee}
          isOption={isOption}
          setOption={setOption}
          handleOrderCoffee={handleOrderCoffee}
          headleResetOption={headleResetOption}
        />
      )}
    </main>
  );
}
