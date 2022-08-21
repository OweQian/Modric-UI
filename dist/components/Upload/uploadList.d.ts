import React from 'react';
import { UploadFile } from './upload';
interface UploadListProps {
    fileList: UploadFile[];
    onRemove: (file: UploadFile) => void;
}
export declare const UploadList: React.FC<UploadListProps>;
export default UploadList;
