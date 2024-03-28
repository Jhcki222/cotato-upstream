import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getUserInfo } from '../../../apis/User';

const CustomerDetail = ({ handleCheckboxChange, customer }) => {
  // 아래의 과정은 pages/Payment/index.jsx에서 실행해도 됨.
  // 즉 사용자 정보를 가져오고, 이를 해당 CustomerDetail에 뿌려주는 식으로 구현하자!
  // 서버로 부터 사용자의 정보를 가져오는 요청
  /*const { data, isLoading } = useQuery({
    queryKey: ['customerInfo'],
    queryFn: getUserInfo,
  });
  console.log(isLoading, data);*/
  // 이후 data값에 들어있는 정보를 참고하여, 아래 이름, 이메일, 연락처에 넣어주는 과정 필요
  return (
    <Container>
      <h1>구매자 정보</h1>
      <h1>
        이름 <span className="value">{customer.name}</span>
      </h1>
      <h1>
        이메일 <span className="value">{customer.email}</span>
      </h1>
      <h1>
        연락처 <span className="value">{customer.phoneNumber}</span>
      </h1>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        <span>위 연락처와 이메일로의 수신에 동의합니다.</span>
      </label>
    </Container>
  );
};

export default CustomerDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 250px;
  margin-right: 50px;
`;
