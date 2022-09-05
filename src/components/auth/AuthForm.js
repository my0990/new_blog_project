import LoginTemplate from "./AuthTemplate";
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
    margin-bottom: 1rem;
`

const AuthForm = ({type, error, onChange, onSubmit, form}) => {
    
    return(
        <LoginTemplate>
            <form onSubmit={onSubmit}>
                <ErrorMessage>{error}</ErrorMessage>
                <StyledInput
                    autoComplete="username"
                    name="username"
                    onChange={onChange}
                    value={form.username}
                >
                    아이디
                </StyledInput>
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                >
                    비밀번호
                </StyledInput>
                {type === 'register'?
                <>
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm}
                    >
                        비밀번호확인
                    </StyledInput>
                    <StyledButton>
                        로그인
                    </StyledButton>
                    <CenterLine>or</CenterLine>
                </>
                    :
                    null}

                <StyledButton>회원가입</StyledButton>
            </form>
        </LoginTemplate>
    )
}
export default AuthForm;