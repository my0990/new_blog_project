import AuthForm from "../../components/auth/AuthForm";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeField, initializeForm } from "../../module/auth";


const RefisterForm = () => {
    const dispatch = useDispatch();
    const {form} = useSelector(({auth})=>({
        form: auth.register
    }))
    const onChange =  e => {
        const {value, name} = e.target;
        dispatch(
            changeField({
                form: 'register',
                key: name,
                value
            })
        );
    };

    useEffect(()=>{
        dispatch(initializeForm('register'));
    },[dispatch]);


    return(
        <AuthForm 
            type='register'
            onChange={onChange}
            form={form}    
        />
    )
}

export default RefisterForm;