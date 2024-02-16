import React from 'react'

import styles from "./FormOne.module.scss";
import {
    RadioGroup,
    Radio,
    Stack
} from '@chakra-ui/react';

interface FormOneProps {
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    handleNext: () => void;
}

const FormOne: React.FC<FormOneProps> = ({ input, handleInputChange, isError, handleNext }) => {
    const [value, setValue] = React.useState('1')
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>1. Consulta</h1>
            <RadioGroup onChange={setValue} value={value}>
                <Stack spacing={1} direction='column'>
                    <Radio value='1'>
                        <span className={styles.customRadioLabel}>Por mi</span>
                    </Radio>
                    <Radio value='2' size='lg'>
                        <span className={styles.customRadioLabel}>Por otra persona</span>
                    </Radio>
                </Stack>
            </RadioGroup>
            <p className={styles.text}>* El resto del formulario es sobre la persona afectada</p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default FormOne;