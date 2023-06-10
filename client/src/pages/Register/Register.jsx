import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Header, Footer } from '../../layouts/index.js';

import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { Context } from '../../context.js';

import styles from './Register.module.scss';
import { observer } from 'mobx-react-lite';

const Registration = () => {
    const { store } = useContext(Context);
    console.log(store);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        defaultValues: {
            firstName: 'Test',
            lastName: 'Tester',
            email: 'testing1@mail.ry',
            password: '123456',
            phoneNumber: '+7 888 999 22 33',
        },
        mode: 'all',
    });

    if (store.isAuth) {
        return <Navigate to="/" />;
    }
    const onSubmit = async (values) => {
        values.phoneNumber = values.phoneNumber
            .replaceAll(' ', '')
            .replaceAll('+', '')
            .replaceAll('(', '')
            .replaceAll(')', '');

        // const data = await dispatch(fetchRegister(values));
        // console.log(data);
        // if (!data.payload) {
        //     return alert('Not able to register');
        // }
        // if ('accessToken' in data.payload) {
        //     window.localStorage.setItem('token', data.payload.accessToken);
        // }
    };

    return (
        <>
            <Header />
            <Paper classes={{ root: styles.root }}>
                <Typography classes={{ root: styles.title }} variant="h5">
                    Account Creation
                </Typography>
                <div className={styles.avatar}>
                    <Avatar sx={{ width: 100, height: 100 }} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        className={styles.field}
                        label="First Name"
                        fullWidth
                        error={Boolean(errors?.firstName?.message)}
                        helperText={errors?.firstName?.message}
                        {...register('firstName', {
                            required: 'Enter first name',
                        })}
                    />
                    <TextField
                        className={styles.field}
                        label="Last Name"
                        fullWidth
                        error={Boolean(errors?.lastName?.message)}
                        helperText={errors?.lastName?.message}
                        {...register('lastName', {
                            required: 'Enter last name',
                        })}
                    />
                    <TextField
                        className={styles.field}
                        label="E-Mail"
                        fullWidth
                        error={Boolean(errors?.email?.message)}
                        helperText={errors?.email?.message}
                        {...register('email', {
                            required: 'Enter email',
                        })}
                    />
                    <TextField
                        className={styles.field}
                        label="Phone Number"
                        fullWidth
                        error={Boolean(errors?.phoneNumber?.message)}
                        helperText={errors?.phoneNumber?.message}
                        {...register('phoneNumber', {
                            required: 'Enter phone number',
                        })}
                    />
                    <TextField
                        className={styles.field}
                        label="Password"
                        fullWidth
                        type="password"
                        error={Boolean(errors?.password?.message)}
                        helperText={errors?.password?.message}
                        {...register('password', {
                            required: 'Enter password',
                        })}
                    />
                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        disabled={!isValid}
                        fullWidth
                    >
                        Register
                    </Button>
                </form>
            </Paper>
            <Footer />
        </>
    );
};

export default observer(Registration);
