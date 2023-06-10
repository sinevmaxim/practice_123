import { useRef, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Header, Footer } from '../../layouts/index.js';

import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { Context } from '../../context.js';
import styles from './CreateProperty.module.scss';

export const CreateProperty = () => {
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
    };

    if (!store.userStore.isAuth) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header />
            <Paper classes={{ root: styles.root }}>
                <Typography classes={{ root: styles.title }} variant="h5">
                    Create Property
                </Typography>
                <form
                // onSubmit={handleSubmit(onSubmit)}
                >
                    <TextField
                        className={styles.field}
                        label="Country"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="City"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="State"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Area"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="County"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Zipcode"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Street"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="House"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Bedrooms"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Bathrooms"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Price"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <TextField
                        className={styles.field}
                        label="Images"
                        // error={Boolean(errors?.email?.message)}
                        // helperText={errors?.email?.message}
                        // {...register('email', { required: 'Enter email' })}
                        fullWidth
                    />
                    <Button
                        // disabled={!isValid}
                        type="submit"
                        size="large"
                        variant="contained"
                        fullWidth
                    >
                        Create property
                    </Button>
                </form>
            </Paper>
            <Footer />
        </div>
    );
};
