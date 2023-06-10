import { useRef, useState, useContext } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Header, Footer } from '../../layouts/index.js';

import RentApplicationApi from '../../api/rentApplication.api.js';
import { api } from '../../api/axios.js';
import { Context } from '../../context.js';
import { Navigate } from 'react-router-dom';

import styles from './CreateRentApplication.module.scss';
import { useForm } from 'react-hook-form';
import FileApi from '../../api/file.api.js';
import FileViewer from '../../components/FileViewer/FileViewer.jsx';

export const CreateRentApplication = () => {
    const { store } = useContext(Context);
    // const { register, handleSubmit } = useForm();

    const employmentVerificationLetterFileRef = useRef();
    const paystubsFileRef = useRef();
    const bankStatementsFileRef = useRef();
    const federalTaxReturnFileRef = useRef();
    const photoIdFileRef = useRef();
    const referenceLetterFileRef = useRef();
    const additionalDocumentsFileRef = useRef();

    const [files, setFiles] = useState({});

    if (!window.localStorage.getItem('token') && !store.userStore.isAuth) {
        return <Navigate to="/login" />;
    }

    const handleChangeFile = async (event) => {
        try {
            const formData = new FormData();
            formData.append('file', event.target.files[0]);
            const { data } = await api.post('/files/getPath', formData);
            const updatedFilesData = { [event.target.name]: data.url };
            setFiles((files) => ({ ...files, ...updatedFilesData }));
            console.log(files);
        } catch (e) {
            console.log(e);
        }
    };

    const onClickRemoveFile = (event) => {
        const filesCopy = { ...files };
        delete filesCopy[event.target.name];
        setFiles((files) => ({ ...filesCopy }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        // console.log(event);
        const formData = new FormData(event.target);

        // for (const value of formData.values()) {
        //     console.log(value);
        // }
        await RentApplicationApi.create(formData);
        // const response = await RentApplicationApi.create(formData);
        // const rentApplicationData = response.data.rentApplication;
        setFiles({});
        // for (const f in rentApplicationData) {
        //     const file = rentApplicationData[f];
        //     setFiles((files) => ({ ...files, [f]: file }));
        // }
        // console.log(files);
    };

    return (
        <>
            <Header />
            <Paper classes={{ root: styles.root }}>
                <Typography classes={{ root: styles.title }} variant="h5">
                    Rent Application Creation
                </Typography>
                {/* <pre>{JSON.stringify(files, null, 2)}</pre> */}
                {/* {Object.entries(files).map(([key, file]) => {
                    console.log(file?.path)
                    return <FileViewer path={file?.path} />;
                })} */}
                <form onSubmit={onSubmit}>
                    {!files.employmentVerificationLetter ? (
                        <Button
                            onClick={() =>
                                employmentVerificationLetterFileRef.current.click()
                            }
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Employment Verification Letter
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="employmentVerificationLetter"
                        >
                            Delete Employment Verification Letter
                        </Button>
                    )}
                    <input
                        // {...register('employmentVerificationLetter')}
                        ref={employmentVerificationLetterFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="employmentVerificationLetter"
                        required
                    />

                    {!files.paystubs ? (
                        <Button
                            onClick={() => paystubsFileRef.current.click()}
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Paystubs
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="paystubs"
                        >
                            Delete Paystubs
                        </Button>
                    )}
                    <input
                        // {...register('paystubs')}
                        ref={paystubsFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="paystubs"
                        // required
                    />

                    {!files.bankStatements ? (
                        <Button
                            onClick={() =>
                                bankStatementsFileRef.current.click()
                            }
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Bank Statements
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="bankStatements"
                        >
                            Delete Bank Statements
                        </Button>
                    )}
                    <input
                        // {...register('bankStatements')}
                        ref={bankStatementsFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="bankStatements"
                        // required
                    />

                    {!files.federalTaxReturn ? (
                        <Button
                            onClick={() =>
                                federalTaxReturnFileRef.current.click()
                            }
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Federal Tax Return
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="federalTaxReturn"
                        >
                            Delete Federal Tax Return
                        </Button>
                    )}
                    <input
                        // {...register('federalTaxReturn')}
                        ref={federalTaxReturnFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="federalTaxReturn"
                        // required
                    />

                    {!files.photoId ? (
                        <Button
                            onClick={() => photoIdFileRef.current.click()}
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Photo Id
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="photoId"
                        >
                            Delete Photo Id
                        </Button>
                    )}
                    <input
                        // {...register('photoId')}
                        ref={photoIdFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="photoId"
                        // required
                    />

                    {!files.referenceLetter ? (
                        <Button
                            onClick={() =>
                                referenceLetterFileRef.current.click()
                            }
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Refference Letter
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="referenceLetter"
                        >
                            Delete Refference Letter
                        </Button>
                    )}
                    <input
                        // {...register('referenceLetter')}
                        ref={referenceLetterFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="referenceLetter"
                        // required
                    />

                    {!files.additionalDocuments ? (
                        <Button
                            onClick={() =>
                                additionalDocumentsFileRef.current.click()
                            }
                            variant="outlined"
                            size="large"
                            color="secondary"
                        >
                            Load Additional Documents
                        </Button>
                    ) : (
                        <Button
                            onClick={onClickRemoveFile}
                            variant="outlined"
                            size="large"
                            color="third"
                            name="additionalDocuments"
                        >
                            Delete Additional Documents
                        </Button>
                    )}
                    <input
                        // {...register('additionalDocuments')}
                        ref={additionalDocumentsFileRef}
                        hidden
                        type="file"
                        onChange={handleChangeFile}
                        name="additionalDocuments"
                    />

                    <Button
                        type="submit"
                        size="large"
                        variant="contained"
                        fullWidth
                    >
                        Create Rent Application
                    </Button>
                </form>
            </Paper>
            <Footer />
        </>
    );
};
