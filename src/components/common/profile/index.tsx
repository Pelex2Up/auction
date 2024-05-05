"use client";
import Image from "next/image";
import userImage from "@/assets/icons/newUser.svg";

export default function ProfileHeader({
  ...props
}: {
  username: string;
  avatar: string;
}) {
  return (
    <div
      style={{
        width: 128,
        height: 40,
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 6,
        display: "inline-flex",
        cursor: "pointer",
      }}
    >
      <Image src={props.avatar ? props.avatar : userImage} alt="avatar" />
      <div
        style={{
          color: "#808080",
          fontSize: 14,
          fontWeight: "400",
          lineHeight: "16.8px",
          letterSpacing: 0.56,
          wordWrap: "break-word",
        }}
      >
        {props.username}
      </div>
    </div>
  );
}
