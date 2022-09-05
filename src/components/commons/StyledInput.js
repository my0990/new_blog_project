import styled from "styled-components";

const Input = styled.input`
    width: 100%;
    height: 32px;
    padding: 0;
    border-width: 0;
    background-color: #ebe7e7;
    margin-bottom: 20px;
    font-size: 18px;
`

const StyledInput = ({children, ...props}) => {
    return(
        <Input placeholder={children} {...props}/>
    )
}

export default StyledInput;