import LoginTemplate from "./LoginTemplate";
import StyledButton from "../commons/StyledButton";
import StyledInput from "../commons/StyledInput";
import styled from "styled-components";

const SignUpTemplate = () => {
    return(
        <LoginTemplate>
            <StyledInput>아이디</StyledInput>
            <StyledInput>비밀번호</StyledInput>
            <StyledInput>비밀번호 확인</StyledInput>
            <StyledButton>회원가입</StyledButton>
        </LoginTemplate>
    )
}

export default SignUpTemplate;