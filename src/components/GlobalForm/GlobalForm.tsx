import React, { useState, useContext, useEffect } from 'react';
import styles from "./GlobalForm.module.scss";
import { FormContext } from '@/contexts/FormContext';

import FormOne from "@/components/FormOne/FormOne"
import FormTwo from "@/components/FormTwo/FormTwo";

const GlobalForm = () => {
    const { isOpen, closeForm } = useContext(FormContext);
    const [input, setInput] = useState('');
    const [showEmailPart, setShowEmailPart] = useState(true);
    const [showFormTwo, setShowFormTwo] = useState(false);

    // Reset showEmailPart to true when form is opened
    useEffect(() => {
        if (isOpen) {
            setShowEmailPart(true);
        }
    }, [isOpen]);

    const handleInputChange = (e: any) => setInput(e.target.value);
    const isError = input === '';

    const handleNext = () => {
        if (showEmailPart) {
            setShowEmailPart(false);
            setShowFormTwo(true); // Show FormTwo when moving to the next part
        } else {
            // Handle logic for moving to the next part after FormTwo
        }
    };

    const handleBack = () => {
        setShowFormTwo(false); // Hide FormTwo
        setShowEmailPart(true); // Show the previous form
    };

    return (
        <div className={`${styles['global-form-container']} ${isOpen ? styles.visible : ''}`}>
            <form>
                {showEmailPart && (
                    <FormOne
                        input={input}
                        handleInputChange={handleInputChange}
                        isError={isError}
                        handleNext={handleNext}
                    />
                )}
                {showFormTwo && (
                    <FormTwo
                        input={input}
                        handleInputChange={handleInputChange}
                        isError={isError} 
                        handleNext={handleNext} 
                        handleBack={handleBack} 
                    />
                )}
            </form>
        </div>
    );
};

export default GlobalForm;


