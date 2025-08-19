import React from "react";

export const TableInfo = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Họ và tên</th>
            <th scope="col">Ngày sinh</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Malcolm Lockyer</td>
            <td>21/03/1961</td>
            <td>Nam</td>
            <td>New york</td>
            <td>
              <button
                className="btn border border-1 me-2"
                style={{ background: "white" }}
              >
                Sửa
              </button>
              <button className="btn  btn-danger">Xoá</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Maria</td>
            <td>11/02/1990</td>
            <td>Nữ</td>
            <td>London</td>
            <td>
              <button
                className="btn border border-1 me-2"
                style={{ background: "white" }}
              >
                Sửa
              </button>
              <button className="btn btn-danger">Xoá</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
