/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const STableDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

function AdminProduct() {
  // eslint-disable-next-line no-unused-vars
  const [productData, setProductData] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    async function getOrderList() {
      const response = await axios.get("http://localhost:5000/admin/products");
      setProductData(response.data.result);
    }
    getOrderList();
  }, []);

  const handleDelete = async (item) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/admin/products/${item._id}`
      );
      if (response.status === 200) {
        alert("상품이 삭제되었습니다..");
        //  페이지 리렌더링이되어야됨
      }
      console.log(response);
    } catch (err) {
      alert("취소에 실패했습니다.");
    }
  };

  return (
    <div>
      <STitle>
        <h1>주문 리스트</h1>
      </STitle>
      <SLayout>
        <STableDiv>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>브랜드이름</th>
                <th>상품이름</th>
                <th>가격</th>
                <th>재고</th>
                <th>상품삭제</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>

                    <td>{item.productBrand.brandName}</td>

                    <td>{item.productTitle}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.productStock}</td>

                    <td>
                      <button
                        onClick={() => {
                          handleDelete(item);
                        }}
                        type="submit"
                      >
                        상품삭제
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </STableDiv>
      </SLayout>
    </div>
  );
}

export default AdminProduct;
