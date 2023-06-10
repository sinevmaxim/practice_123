import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchUserInfo, selectIsAuth } from '../../redux/slices/auth';

import styles from './Login.module.scss';
import { Header, Footer } from '../../layouts/index.js';
import { useContext } from 'react';
import { Context } from '../../context.js';

const Login = () => {
    const { store } = useContext(Context);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            email: 'testing1@mail.ry',
            password: '123456',
        },
        mode: 'all',
    });

    const onSubmit = async (values) => {
        console.log(values);
        store.userStore.login(values.email, values.password);
    };

    if (store.userStore.isAuth) {
        return <Navigate to="/" />;
    }
    return (
        <>
            <Header />
            <Paper classes={{ root: styles.root }}>
                <Typography classes={{ root: styles.title }} variant="h5">
                    Log In
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        className={styles.field}
                        label="E-Mail"
                        error={Boolean(errors?.email?.message)}
                        helperText={errors?.email?.message}
                        {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Password"
                        type="password"
                        fullWidth
                        error={Boolean(errors?.password?.message)}
                        helperText={errors?.password?.message}
                        {...register('password', {
                            required: 'Enter password',
                        })}
                    />
                    <Button
                        disabled={!isValid}
                        type="submit"
                        size="large"
                        variant="contained"
                        fullWidth
                    >
                        Log In
                    </Button>
                </form>
            </Paper>
            <Footer />
        </>
    );
};

export default observer(Login);
