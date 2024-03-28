import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Tomato from '../../assets/imgs/Funding/Tomato.png';
import Plum from '../../assets/imgs/Funding/Plum.png';
import Peach from '../../assets/imgs/Funding/Peach.png';

export default function Items({isDetailPage}) {
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [notification, setNotification] = useState('');
    // useEffect(() => {
    //     // Fetch product data from the API
    //     axios.get('your-product-api-endpoint')
    //       .then(response => {
    //         const fetchedProducts = response.data; // Modify this based on your API response structure
    //         setProducts(fetchedProducts);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching product data:', error);
    //       });
    //   }, []);
      useEffect(() => {
    // api추가

    const fakeProductData = [
      {
        id: 1,
        number: '선택 1',
        details: '#멋쟁이 토마토',
        name: '토마토',
        weight: '10kg',
        price: '10,000',
        quantity: 0,
        imageUrl: Tomato,
      },
      {
        id: 2,
        number: '선택 2',
        details: '#멋쟁이 매실',
        name: '매실',
        weight: '10kg',
        price: '20,000',
        quantity: 0,
        imageUrl: Plum,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      {
        id: 3,
        number: '선택 3',
        details: '#멋쟁이 자두',
        name: '자두',
        weight: '10kg',
        price: '30,000',
        quantity: 0,
        imageUrl: Peach,
      },
      // 추가가능
    ];

    setProducts(fakeProductData);
  }, []);

const handleQuantityChange = (product, change) => {
    const newQuantity = Math.max(0, product.quantity + change);

    setProducts(prevProducts => {
      const updatedProducts = prevProducts.map(p => {
        if (p.id === product.id) {
          return { ...p, quantity: newQuantity };
        }
        return p;
      });
      return updatedProducts;
    });
  };

  const handleSelectClick = (product) => {
    if (product.quantity === 0) {
      alert('수량을 선택해주세요.');
      return;
    }
  
    try {
      // const response =  axios.post('http://ec2-13-125-35-175.ap-northeast-2.compute.amazonaws.com/api/v1/products/{productId}', {
      //   productId: product.id,
      //   quantity: product.quantity,
      // }
      // );
      alert(product.quantity + '개를 장바구니에 담았습니다.');
      console.log(response.data); // Log the server response (optional)
      setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
      setNotification('');
    } catch (error) {
      console.error('Error sending data to the server:', error);
    }
  };
    return (
        <>
      {products.length > 0 && (
        <ProductList>
          {products.map((product) => (
            <Product key={product.id}>
                  <img
                    src={product.imageUrl}
                    alt={`상품 이미지 - ${product.name}`}
                  />
                  <OptionContainer>
                    <ProductInfo>
                      {product.number} <a>{product.details}</a>
                    </ProductInfo>
                    <ProductName>
                      품 명 <b>{product.name}</b>
                    </ProductName>
                    <ProductWeight>
                      무 게 <b>{product.weight}</b>
                    </ProductWeight>
                    <ProductPrice>
                      가 격<b>{product.price}원</b>
                    </ProductPrice>
                    {isDetailPage &&
                      <>
                      <QuantityControl>
                    <QuantityButton
                      onClick={() => handleQuantityChange(product, -1)}
                    >
                      -
                    </QuantityButton>
                    <ProductQuantity>{product.quantity}</ProductQuantity>
                    <QuantityButton
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      +
                    </QuantityButton>
                      </QuantityControl>
                      <SelectButton onClick={() => handleSelectClick(product)}>
                        담기
                      </SelectButton>
                      </>
                    }

                  </OptionContainer>
                </Product>
              ))}
            </ProductList>
          )}
          </>
    );
}



const Product = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 40px 20px;
  width: 400px; // 상품 박스의 너비 조정
  height: 530px;
  background: #fff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 15px rgba(0, 0, 0, 0.2));
  
  img {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
`;
const ProductList = styled.div`
  display: flex;
  flex-wrap: nowrap; // 줄 바꿈 방지
  overflow: auto;
`;

const OptionContainer = styled.div`
  display: flex;
  width: 358px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  b {
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 15px;
  }
`;

const ProductInfo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  a {
    color: var(--Point-Color, #ff9c2f);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 14px;
  }
`;

const ProductName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 30px;
`;

const ProductWeight = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;

const ProductPrice = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 10px;
`;

const QuantityControl = styled.div`
  display: flex;
  width: 116.215px;
  height: 46px;
  flex-shrink: 0;
  align-items: center;
  margin-top: 10px;
  border-radius: 84px;
  border: 1px solid #969696;
  background: #fff;
  justify-content: space-between;
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 30px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  stroke: var(--Font-Color, #2c2c2c);
  padding-bottom: 3px;
`;

const ProductQuantity = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
const SelectButton = styled.div`
  width: 143px;
  display: flex;
  position: relative;
  left: 11rem;
  top: -3rem;
  height: 46px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  border-radius: 84px;
  border: 1px solid var(--Main-Color, #ff4256);
  background: #ff4257;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;


