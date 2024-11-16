'use client';

import { FC, useEffect, useState } from 'react';

import $styles from './ip.module.css';

export const IPDisplay: FC = () => {
    const [ip, setIP] = useState<string>('');

    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await fetch('/json');
                const data = await response.json();
                setIP(data.ip);
            } catch (error) {
                console.error('Error fetching IP:', error);
            }
        };

        fetchIP();
    }, []);

    return (
        <div className={$styles.container}>
            <h1 className={$styles.title}>Your IP Address</h1>
            <h1 className={$styles.text}>{ip || 'Fetching...'}</h1>
        </div>
    );
};
