import React from 'react'

import styles from "./FormOne.module.scss";
import {
    RadioGroup,
    Radio,
    Stack
} from '@chakra-ui/react';

interface FormOneProps {
    input: string;
    handleInputChange: (fieldName: string, value: any) => void;
    formData: any;
    isError: boolean;
    handleNext: () => void;
}

const FormOne: React.FC<FormOneProps> = ({ input, handleInputChange, formData, isError, handleNext }) => {
    const [value, setValue] = React.useState('')

    const handleChange = (nextValue: string) => {
        console.log("Selected value:", nextValue);
        setValue(nextValue); // Update the local state value
        handleInputChange("selectedValue", nextValue); // Update formData with the selected value
    };

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>1. Consulta</h1>
            <RadioGroup onChange={handleChange} value={value}>
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