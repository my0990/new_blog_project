import styled from "styled-components";


const Button = styled.button`
    width: 100%;
    background-color: #9950BB;
    color: white;
    border: none;
    height: 32px;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        background-color: #5E1F7B;
    }
`
const StyledButton = ({children}) => {
    return(
        <Button>
            {children}
        </Button>
    )
}

export default StyledButton;