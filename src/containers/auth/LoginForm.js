import AuthForm from "../../components/auth/AuthForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initializeForm } from "../../module/auth";

const LoginForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({auth}) => ({
        form: auth.login
    }));
    const onChange = e => {
        const { value, name } = e.target;
        dispatch(
            changeField({
                form: 'login',
                key: name,
                value
            })
        );
    };

    const onSubmit = e => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(initializeForm('login'));
    }, [dispatch]);
    return(
        <AuthForm 
            type={'login'}
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
};

export default LoginForm;