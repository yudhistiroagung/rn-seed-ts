import React from 'react';
export declare type ButtonProps = {
    label: string;
    onClick?: () => void;
};
export declare const Button: ({ label, onClick }: ButtonProps) => React.JSX.Element;
