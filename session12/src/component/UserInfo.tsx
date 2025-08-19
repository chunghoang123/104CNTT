import React from "react";

const user = {
  name: "Nguyễn Văn A",
  sex: "Name",
  brithDay: "06/03/2024",
  email: "nva@gmail.com",
  location: "Thanh Xuân, Hà Nội",
};

export default function UserInfo() {
  return (
    <>
      <h4>Thông tin cá nhân</h4>
      <li>Họ và Tên: {user.name}</li>
      <li>Giới tính: {user.sex}</li>
      <li>Ngày sinh: {user.brithDay}</li>
      <li>Email: {user.email}</li>
      <li>Địa chỉ: {user.location}</li>
    </>
  );
}
