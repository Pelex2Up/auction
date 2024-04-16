import { CircularProgress } from "@mui/material";
import useSWR from "swr";
import styles from "./latest.module.scss";
import RootLayout from "@/app/layout";

const fetcher = (url: string | URL | Request) =>
  fetch(url).then((res) => res.json());

export default function Latest() {
  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );

  if (!data)
    return (
      <div className={styles.wrapper}>
        <CircularProgress />
      </div>
    );
  if (error) return <div>Ошибка при выполнении запроса...</div>;

  const dataTo = new FormData();
  dataTo.append("email", "admin@gmail.com");
  dataTo.append("password", "admin");

  return (
    <RootLayout>
      <h1>{data.name}</h1>
      <h2>{data.description}</h2>
      <button
        onClick={() =>
          fetch("https://auction.magnetica.by/login/", {
            method: "POST",
            body: dataTo,
          }).catch((error) => console.log(error))
        }
      >
        KNOPKA
      </button>
    </RootLayout>
  );
}
