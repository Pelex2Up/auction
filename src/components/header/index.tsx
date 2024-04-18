import Image from "next/image";
import { Button } from "../common/buttons";
import { CourseInfo } from "./courseInfo";
import styles from "./header.module.scss";
import plusIcon from "@/assets/icons/plus.svg";

export default function Header() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.wrapper_topHeader}>
        <div className={styles.wrapper_topHeader_leftContent}>
          <a>Главная</a>
          <a>Объявления о покупке</a>
          <a>Объявления о продаже</a>
          <a>Правила участия</a>
          <a>Тарифы</a>
          <a>Реклама</a>
        </div>
        <div className={styles.wrapper_topHeader_rightContent}>
          <p>
            Для подачи объявления необходимо пройти <a>регистрацию</a>
          </p>
        </div>
      </div>
      <span
        style={{
          width: "100%",
          height: "0.01rem",
          border: "0.5px solid grey",
          display: "block",
          opacity: "0.6",
        }}
      />
      <div className={styles.wrapper_bottomHeader}>
        <div className={styles.wrapper_bottomHeader_leftContent}>
          <CourseInfo />
        </div>
        <div className={styles.wrapper_bottomHeader_rightContent}>
          <Button text="Подать объявление">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 1V21V1ZM1 10.9385H21H1Z" fill="white" />
              <path
                d="M11 1V21M1 10.9385H21"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
          <Button text="Вход в аккаунт и регистрация" variant="secondary" />
        </div>
      </div>
    </nav>
  );
}
