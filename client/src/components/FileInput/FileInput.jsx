import { useRef, useState } from 'react';
import Button from '@mui/material/Button';

export const FileInput = ({ onChange, name, buttonText }) => {
    const inputFileRef = useRef();
    const [fileUrl, setFileUrl] = useState('');

    return (
        <>
            <Button
                onClick={() => inputFileRef.current.click()}
                variant="outlined"
                size="large"
                color="secondary"
            >
                Load {buttonText}
            </Button>
            <input
                ref={inputFileRef}
                hidden
                type="file"
                onChange={onChange}
                name={name}
            />
        </>
    );
};
