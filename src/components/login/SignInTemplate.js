import LoginTemplate from "./LoginTemplate";
import StyledButton from "../commons/StyledButton";
import StyledInput from "../commons/StyledInput";
import styled from "styled-components";

const CenterLine = styled.div`
    width: 100%;
    display: flex;
    flex-basis:100%;
    align-items: center;
    color: rgba(0,0,0,0.35);
    font-size: 14px;
    margin: 8px 0px;
    &:before{
        content: "";
        flex-grow: 1;
        margin: 0px 10px 0px 0px;
        background: rgba(0,0,0,0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
    }
    &:after {
        content: "";
        flex-grow: 1;
        margin: 0px 0px 0px 10px;
        background: rgba(0,0,0,0.35);
        height: 1px;
        font-size: 0px;
        line-height: 0px;
    }
`
const ErrorMessage = styled.div`
    color: red;
    margin-bottom: 10px;
    height: 21px;
`

const SignInTemplate = () => {
    return(
        <LoginTemplate>
            <ErrorMessage>비밀번호가 틀립니다</ErrorMessage>
            <StyledInput>아이디</StyledInput>
            <StyledInput>비밀번호</StyledInput>
            <StyledButton>로그인</StyledButton>
            <CenterLine>or</CenterLine>
            <StyledButton>회원가입</StyledButton>
        </LoginTemplate>
    )
}
export default SignInTemplate;