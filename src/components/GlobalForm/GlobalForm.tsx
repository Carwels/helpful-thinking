import React, { useState, useContext, useEffect } from 'react';
import styles from "./GlobalForm.module.scss";
import { FormContext } from '@/contexts/FormContext';
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    RadioGroup,
    HStack,
    Radio,
    FormErrorMessage
} from '@chakra-ui/react';

const GlobalForm = () => {
    const { isOpen, closeForm } = useContext(FormContext);
    const [input, setInput] = useState('');
    const [showEmailPart, setShowEmailPart] = useState(true);

    // Reset showEmailPart to true when form is opened
    useEffect(() => {
        if (isOpen) {
            setShowEmailPart(true);
        }
    }, [isOpen]);

    const handleInputChange = (e: any) => setInput(e.target.value);
    const isError = input === '';

    const handleNext = () => {
        setShowEmailPart(false);
    };

    return (
        <div className={`${styles['global-form-container']} ${isOpen ? styles.visible : ''}`}>
            <form>
                {showEmailPart && (
                    <div>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Email address</FormLabel>
                            <Input type='email' value={input} onChange={handleInputChange} />
                            {!isError ? (
                                <FormHelperText>
                                    We'll never share your email.
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <button onClick={handleNext}>Next</button>
                    </div>
                )}
                {!showEmailPart && (
                    <div>
                        <FormControl as='fieldset'>
                            <FormLabel as='legend'>
                                Favorite Naruto Character
                            </FormLabel>
                            <RadioGroup defaultValue='Itachi'>
                                <HStack spacing='24px'>
                                    <Radio value='Sasuke'>Sasuke</Radio>
                                    <Radio value='Nagato'>Nagato</Radio>
                                    <Radio value='Itachi'>Itachi</Radio>
                                    <Radio value='Sage of the six Paths'>Sage of the six Paths</Radio>
                                </HStack>
                            </RadioGroup>
                            <FormHelperText>Select only if you're a fan.</FormHelperText>
                        </FormControl>
                        <button type="button" onClick={closeForm}>Close</button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default GlobalForm;


