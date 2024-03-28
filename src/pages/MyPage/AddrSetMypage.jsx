import React, { useState } from 'react';
import { styled } from 'styled-components';
import AddrForm from './AddrForm';

export default function AddrSetMypage() {

    const [AddrList, setAddrList] = useState([
        {
        AddrName: '기본 배송지', 
        name:"김김김", 
        address:"서울시 중구", 
        DetailAddress:"1번지", 
        call:"01012345678", },
        {id:"저기", AddrName: '회사', name:"김김김", address:"어디", DetailAddress:"저기", call:"01012345678", },
      ]);

    const [initialValue, setInitValue] = useState({ 
        AddrName: "", 
        name:"", 
        address:"", 
        DetailAddress:"", 
        call:"",
    })
    
    const [isEditing, setIsEditing] = useState(0);

    const addAddrList = (a) => {
        
        setAddrList(prev =>  ([
            ...prev,
           {
            AddrName: a.AddrName,
            name: a.name,
            address: a.address,
            DetailAddress: a.DetailAddress,
            call: a.Call,
        }]));
        console.log(AddrList);
    }

    const editAddrList = (a) => {
        const newList = AddrList.map((data) => {
            if(data.DetailAddress == a.DetailAddress){
                data.AddrName = a.AddrName;
                data.name = a.name;
                data.address = a.address;
                data.DetailAddress = a.DetailAddress;
                data.call = a.Call
            }
        });
        setAddrList(newList);
        console.log(AddrList);
    }

    const endEdit = () => {
        setIsEditing(0);
    }

    const handleAdd = () => {
        setInitValue({
            AddrName: '', 
            name:"", 
            address:"", 
            DetailAddress:"", 
            call:"",
        })
        setIsEditing(1);
    }

    const handleEdit = (AddrName, name, address, DetailAddress, call) => {
        setInitValue({
            AddrName: AddrName, 
            name: name, 
            address: address, 
            DetailAddress: DetailAddress, 
            call: call,
        })
        setIsEditing(1);
    }
    const handleDelete = (DetailAddress) => {
        console.log(DetailAddress);
        if(AddrList.length <= 1){
            alert("배송지가 최소 1개 필요합니다.")
        }
        else{
            if (window.confirm("배송지를 삭제하시겠습니까?")) {
                //const id = this.id;
                setAddrList(AddrList.filter(AddrList => AddrList.DetailAddress != DetailAddress));
                alert("삭제되었습니다.");
              } 
            else {

              }
        }
    }

    return (
        <>
        {!isEditing && <>
        {  AddrList.map(({AddrName, name, address, DetailAddress, call}) => (
            <Wrap key = {DetailAddress} style={{width: "960px"}}>
            <>
                <hr />
                <AddressBox>
                    <AddressName>
                        {AddrName}
                    </AddressName>
                    <Detail>
                        <p>{name}</p>
                        <p>{call}</p>
                        <p>{address + ' ' + DetailAddress}</p>
                        <p></p>
                    </Detail>
                    <ButtonBox>
                        <EditButton onClick={() => {handleEdit(AddrName, name, address, DetailAddress, call)}}>
                            수정
                        </EditButton>
                        <DeleteButton onClick={() => {handleDelete(DetailAddress)}}>
                            삭제
                        </DeleteButton>
                    </ButtonBox>
                </AddressBox>
            </>
            <hr />
            </Wrap>
            ))
        }
        <AddButton onClick={handleAdd}>
            배송지 추가하기
        </AddButton>
        </>}
        {isEditing ? <AddrForm initValue={initialValue} addAddr={addAddrList} editAddr={editAddrList} endEdit={endEdit}/> : ""}
        </> 
    )
}
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 1280px;
    margin-left: 50px;
`

const AddressBox = styled.div`
    display: flex;
    width: 1280px;
    height: 8rem;
`

const AddressName = styled.div`
    font-weight: bold;
    margin-top: 1.5rem;
    width: 200px;
`

const Detail = styled.div`
    color: #4A4A4A;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    line-height: 120%;
    width: 600px;
`

const ButtonBox = styled.div`
    display: flex;
    margin: 0.5rem;
    margin-top: 1rem;
    width: 200px;
`

    const AddButton = styled.button`
        color: #FF6565;
        font-weight: bold;
        margin-top: 1rem;
        margin-right: 0.5rem;
        margin-left: 50px;
        background-color: transparent;
        border-color: transparent;
    `

    const EditButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        width: 65px;
        height: 25px;
        margin-right:1rem;
        margin-bottom: 0.2rem;
    `

const DeleteButton = styled.button`
        color: #FF6565;
        border-color: #FF6565;
        border-style: solid;
        border-width: 1px;
        border-radius: 10rem;
        width: 65px;
        height: 25px;
`