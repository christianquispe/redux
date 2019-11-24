import React, { useState } from 'react';
import { InjectedFormProps } from 'redux-form';
import Stepper from 'react-stepper-horizontal';
import { Card } from 'reactstrap';

import AccountDetailForm from './AccountDetailForm';
import PersonalDetailForm from './PersonalDetailForm';
import { For } from '@babel/types';

export const Form: React.FC<InjectedFormProps> = (props: any) => {
    const [page, setPage] = useState(0);
    const steps = [{
            title: 'Personal Details'
        },
        {
            title: 'Account Detail'
        }
    ];

    const { onSubmit, isLoading } = props;


    const nextPage = () => {
        setPage(page + 1)
    };


    const previusPage = () => {
        setPage(page - 1);
    };
        
    return (
        <Card>
            <Stepper steps={steps} activeStep={page}/>
            {page === 0 && <PersonalDetailForm onSubmit={nextPage} />}
            {page === 1 && (
                <PersonalDetailForm previusPage={previusPage} onSubmit={onSubmit} />
            )}
        </Card>
    );
}



export default Form;