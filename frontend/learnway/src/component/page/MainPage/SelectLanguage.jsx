import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import flagData from "./img/flagList.json";

const LangSelect = styled.div`
    // width: 60%;
    // height: 40%;
    text-align : center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Language = styled.div`
    width :15%;
    // height: 100%;
    padding : 2vw 4vw;
    float:left;
    text-align: center;
    margin: 0 auto;

    &:hover {
        background-color: rgb(0, 0, 0, 0.5);
        color: rgb(255, 255, 255, 100);
    }
`;

const LangImg = styled.img`
    width: 4vw;
    height: 2vw;
`;

const SelectLanguage = (props) => {
    const [optionList, setOptionList] = useState([]);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    

    // const TokenReducer = useSelector((state) => state.TokenReducer);

    //API에서 옵션 목록 가져오는 함수
    function dropdownBoxRenderer() {
        axios
            .get("api/users/language", 
            // {headers : TokenReducer.accessToken}
            )
            .then(function (res) {
                const data = res.data.language;
                const flag = flagData.data; //국기 이미지 json으로 한번에

                const options = [];
                for (let i = 0; i < data.length; i++) {
                    options.push(
                        <Language key={data[i].languageId} value={data[i].name}
                            onClick={(e) => {
                            updateSelectedValue(data[i].name);
                        }}
                        >
                            <LangImg src={flag[i].url}></LangImg><br></br>
                            {data[i].name}
                        </Language>
                    );
                }
                setOptionList(options);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    //드롭다운 박스에서 선택한 요소로 redux 상태 업데이트하는 함수
    function updateSelectedValue(val) {
        setValue(val);
        // console.log(val);
        //redux state 업데이트
        dispatch({ type: "matchLangUpdate", payload: val });

    }

    useEffect(() => {
        dropdownBoxRenderer();
    }, []);

    return (
        <LangSelect>
            {optionList}
        </LangSelect>
    );
}
export default SelectLanguage;
