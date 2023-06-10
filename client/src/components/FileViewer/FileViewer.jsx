import React from 'react';
import { apiUrl } from '../../api/axios';

const FileViewer = ({ path }) => {
    return (
        <a href={`${apiUrl}/${path}`}>Open file</a>
    );
};

export default FileViewer;
