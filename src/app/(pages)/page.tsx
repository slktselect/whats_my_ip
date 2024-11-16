import { FC } from 'react';

import { Tools } from '../_components/home/tools';

import { IPaginateQueryProps } from '../_components/paginate/types';

const HomePage: FC<{ searchParams: IPaginateQueryProps }> = async ({ searchParams }) => {
    return (
        <div className="tw-page-container">
            <Tools />
        </div>
    );
};

export default HomePage;
