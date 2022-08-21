import React from 'react';
interface DraggerProps {
    onFile: (files: FileList) => void;
    children: React.ReactNode;
}
export declare const Dragger: React.FC<DraggerProps>;
export default Dragger;
