import React from 'react';
import styles from './coffeeOptionModal.module.scss';
import Image from 'next/image';
import { Modal } from '../../components/Modal';
import InputRadio from '../../components/InputRadio';
import InputCheckbox from '../../components/InputCheckbox';
import Button from '../../components/Button';
import { IsOptionType, SelectCoffeeType, Temperature } from '@/types';

interface CoffeeOptionModalProps {
  selectCoffee: SelectCoffeeType;
  isOption: IsOptionType;
  setOption: React.Dispatch<React.SetStateAction<IsOptionType>>;
  handleOrderCoffee: () => void;
  headleResetOption: () => void;
}

export const CoffeeOptionModal = ({
  selectCoffee,
  isOption,
  setOption,
  handleOrderCoffee,
  headleResetOption,
}: CoffeeOptionModalProps) => {
  return (
    <Modal>
      <h2 className={styles.modalHeader}>옵션을 선택해주세요.</h2>
      <div className={styles.modalContents}>
        <div className={styles.coffeeInfoWrap}>
          <figure>
            <Image src={selectCoffee.image} width={120} height={120} alt="" />
            <figcaption>
              <h3>{selectCoffee.name}</h3>
              <p>{selectCoffee.description}</p>
              <p>{selectCoffee.price.toLocaleString()} 원</p>
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
                onChange={() => setOption((prev: IsOptionType) => ({ ...prev, temperature: item }))}
              />
            ))}
          </li>
          <li>
            <p>포장</p>
            <InputRadio
              checked={isOption.take === 'take'}
              title="테이크아웃"
              onChange={() => setOption((prev: IsOptionType) => ({ ...prev, take: 'take' }))}
            />
            <InputRadio
              checked={isOption.take === 'cafe'}
              title="매장"
              onChange={() => setOption((prev: IsOptionType) => ({ ...prev, take: 'cafe' }))}
            />
          </li>
          <li>
            <p>옵션</p>
            <InputCheckbox
              checked={isOption.shot}
              onChange={() => setOption((prev: IsOptionType) => ({ ...prev, shot: !prev.shot }))}
            >
              <span>
                샷 추가
                <br /> (+ 500원)
              </span>
            </InputCheckbox>
            <InputCheckbox
              checked={isOption.syrup}
              onChange={() => setOption((prev: IsOptionType) => ({ ...prev, syrup: !prev.syrup }))}
            >
              <span>
                시럽 추가
                <br /> (+ 500원)
              </span>
            </InputCheckbox>
            <InputCheckbox
              checked={isOption.ice}
              onChange={() => setOption((prev: IsOptionType) => ({ ...prev, ice: !prev.ice }))}
            >
              <span>
                얼음 많이
                <br /> (+ 0원)
              </span>
            </InputCheckbox>
          </li>
        </ul>
        <div className={styles.modalFooter}>
          <Button title="닫기" style="defaultBtn" onClick={headleResetOption} />
          <Button title="담기" onClick={handleOrderCoffee} />
        </div>
      </div>
    </Modal>
  );
};
