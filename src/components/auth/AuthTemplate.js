import styled from "styled-components";

const Contaner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const Wrapper = styled.div`
    
    width: 320px;
    box-sizing: border-box;
    background-color: white;
    /* margin: auto; */
    border-radius: 15px;
    /* margin-top: 4rem; */
    text-align: center;
    padding: 40px;
    p {
        font-size: 22px;
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
`

const AuthTemplate = ({children}) => {
    return(
        <Contaner>
            <Wrapper>
                <p>추억을 남겨볼까요?</p>
                {children}
            </Wrapper>
        </Contaner>
    )
}

export default AuthTemplate;