"use client";
import { useEffect, useState } from "react";
import DefaultLink from "../common/DefaultLink";
import { Button } from "../common/buttons";
import { CourseInfo } from "./courseInfo";
import styles from "./header.module.scss";
import Portal from "../Modal/Portal";
import { LoginModal } from "../Modal/Login";
import { IProfile } from "@/types/profile";
import ProfileHeader from "../common/profile";
import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import { useRouter } from "next/navigation";
import { PathE } from "@/enum/pathE";

export default function Header() {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [modalState, setModalState] = useState<number>(1);
  const [profile, setProfile] = useState<IProfile>();
  const [status, setStatus] = useState<string>();

  useEffect(() => {
    if (!profile && status !== "unauthorized") {
      const getProfile = async () => {
        const profileData = await fetch("https://auction.magnetica.by/api/me/");

        if (profileData.ok) {
          setProfile(await profileData.json());
        } else {
          setStatus("unauthorized");
        }
      };
      getProfile();
    }
  }, [profile, status]);

  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.wrapper_topHeader}>
          <div className={styles.wrapper_topHeader_leftContent}>
            <DefaultLink text="Главная" href="/" />
            <DefaultLink text="Объявления о покупке" />
            <DefaultLink text="Объявления о продаже" />
            <DefaultLink text="Правила участия" />
            <DefaultLink text="Тарифы" />
            <DefaultLink text="Реклама" />
          </div>
          <div className={styles.wrapper_topHeader_rightContent}>
            <p>
              Для подачи объявления необходимо пройти{" "}
              <DefaultLink
                onClick={() => {
                  setModalState(2);
                  setShow(true);
                }}
                style={{ color: "#008001" }}
                text="регистрацию"
              />
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
            {!profile ? (
              <>
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
                  onClick={() => {
                    setModalState(1);
                    setShow(true);
                  }}
                  text="Вход в аккаунт и регистрация"
                  variant="secondary"
                />
              </>
            ) : (
              <ProfileHeader
                username={profile.username}
                avatar={profile.profile.avatar || ""}
              />
            )}
          </div>
        </div>
        {show && (
          <Portal close={() => setShow(false)}>
            <LoginModal
              selectedState={modalState}
              close={() => setShow(false)}
            />
          </Portal>
        )}
      </header>
      <header className={styles.mobileWrapper}>
        <Image src={Logo} alt="Logo" onClick={() => router.push(PathE.Home)} />
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 6C5 6.26522 4.89464 6.51957 4.70711 6.70711C4.51957 6.89464 4.26522 7 4 7C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5C4.26522 5 4.51957 5.10536 4.70711 5.29289C4.89464 5.48043 5 5.73478 5 6ZM7 6C7 5.73478 7.10536 5.48043 7.29289 5.29289C7.48043 5.10536 7.73478 5 8 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7H8C7.73478 7 7.48043 6.89464 7.29289 6.70711C7.10536 6.51957 7 6.26522 7 6ZM7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929C7.48043 11.1054 7.73478 11 8 11H20C20.2652 11 20.5196 11.1054 20.7071 11.2929C20.8946 11.4804 21 11.7348 21 12C21 12.2652 20.8946 12.5196 20.7071 12.7071C20.5196 12.8946 20.2652 13 20 13H8C7.73478 13 7.48043 12.8946 7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12ZM8 17C7.73478 17 7.48043 17.1054 7.29289 17.2929C7.10536 17.4804 7 17.7348 7 18C7 18.2652 7.10536 18.5196 7.29289 18.7071C7.48043 18.8946 7.73478 19 8 19H14C14.2652 19 14.5196 18.8946 14.7071 18.7071C14.8946 18.5196 15 18.2652 15 18C15 17.7348 14.8946 17.4804 14.7071 17.2929C14.5196 17.1054 14.2652 17 14 17H8ZM4 13C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13ZM5 18C5 18.2652 4.89464 18.5196 4.70711 18.7071C4.51957 18.8946 4.26522 19 4 19C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17C4.26522 17 4.51957 17.1054 4.70711 17.2929C4.89464 17.4804 5 17.7348 5 18Z"
            fill="#868686"
          />
        </svg>
      </header>
    </>
  );
}
