import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import './styles/index.css';

export const metadata: Metadata = {
    title: 'whats_my_ip',
    description: '查看我的ip地址',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
    <html lang="en">
        <body>{children}</body>
    </html>
);

export default RootLayout;
