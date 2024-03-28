import styled from 'styled-components';

const DeliverInfo = ({
  onClickChangeAddress,
  handleInputChange,
  currentAddress,
}) => {
  return (
    <DeliverInfoContainer>
      <h1>
        배송지 정보
        <button onClick={onClickChangeAddress}>배송지 변경</button>
      </h1>
      <h1>
        이름 <span className="value">{currentAddress.customerName}</span>
      </h1>
      <h1>
        연락처 <span className="value">{currentAddress.phoneNumber}</span>
      </h1>
      <h1>
        배송주소{' '}
        <span className="value">
          [{currentAddress.zoneCode}] {currentAddress.address}{' '}
          {currentAddress.detailAddress}
        </span>
      </h1>
      <hr style={{ width: '95%', margin: '0 auto', marginBottom: '30px' }} />
      <h1>
        배송 요청사항{' '}
        <input
          type="text"
          placeholder="ex) 초인종 누르지 말아 주세요~!"
          onChange={handleInputChange}
        />
      </h1>
    </DeliverInfoContainer>
  );
};

export default DeliverInfo;

const DeliverInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 298px;
  position: relative;
  h1 button {
    margin-left: 20px;
    width: 160px;
    font-size: 18px;
    font-weight: 500;
    border: 1px solid #bcbcbc;
    border-radius: 5px;
  }
`;
