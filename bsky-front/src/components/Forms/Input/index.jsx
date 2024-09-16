"use client";

import React from 'react';

export const Input = ({ label, placeholder, type = 'text', ...rest }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} {...rest} />
        </div>
    );
};