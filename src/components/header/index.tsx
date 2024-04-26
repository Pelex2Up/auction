"use client";
import { useState } from "react";
import DefaultLink from "../common/DefaultLink";
import { Button } from "../common/buttons";
import { CourseInfo } from "./courseInfo";
import styles from "./header.module.scss";
import Portal from "../Modal/Portal";
import { LoginModal } from "../Modal/Login";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  return (
    <header className={styles.wrapper}>
      <div className={styles.wrapper_topHeader}>
        <div className={styles.wrapper_topHeader_leftContent}>
          <DefaultLink text="Главная" />
          <DefaultLink text="Объявления о покупке" />
          <DefaultLink text="Объявления о продаже" />
          <DefaultLink text="Правила участия" />
          <DefaultLink text="Тарифы" />
          <DefaultLink text="Реклама" />
        </div>
        <div className={styles.wrapper_topHeader_rightContent}>
          <p>
            Для подачи объявления необходимо пройти{" "}
            <DefaultLink style={{ color: "#008001" }} text="регистрацию" />
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button
            onClick={() => setShow(true)}
            text="Вход в аккаунт и регистрация"
            variant="secondary"
          />
        </div>
      </div>
      {show && (
        <Portal close={() => setShow(false)}>
          <LoginModal close={() => setShow(false)} />
        </Portal>
      )}
    </header>
  );
}
