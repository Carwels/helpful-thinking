import React, { useState, useContext, useEffect } from 'react';
import styles from "./GlobalForm.module.scss";
import { FormContext } from '@/contexts/FormContext';
import { Dispatch, SetStateAction } from 'react';

import FormOne from "@/components/FormOne/FormOne"
import FormTwo from "@/components/FormTwo/FormTwo";

type FormData = {
    [key: string]: any;
};

const GlobalForm = () => {
    const { isOpen, closeForm } = useContext(FormContext);
    const [input, setInput] = useState('');
    const [showEmailPart, setShowEmailPart] = useState(true);
    const [showFormTwo, setShowFormTwo] = useState(false);
    const [formData, setFormData] = useState<any>({});

    // Other state variables for FormTwo
    // const [selectedValue, setselectedValue] = useState('');
    // const [selectedDay, setSelectedDay] = useState('');
    // const [selectedMonth, setSelectedMonth] = useState('');
    // const [selectedYear, setSelectedYear] = useState('');
    // const [selectedCountry, setSelectedCountry] = useState('');
    // const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('');
    // const [selectedLanguage, setSelectedLanguage] = useState('');
    // const [selectedResidenceCountry, setSelectedResidenceCountry] = useState('');
    // const [phoneNumber, setPhoneNumber] = useState('');

    // Reset showEmailPart to true when form is opened
    useEffect(() => {
        if (isOpen) {
            setShowEmailPart(true);
        }
    }, [isOpen]);

    const handleInputChange = (fieldName: string, value: any, setFormData: Dispatch<SetStateAction<FormData>>) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    const isError = input === '';

    const handleSubmit = () => {
        // Format date of birth
        const dateOfBirth = `${formData.Day}/${formData.Month}/${formData.Year}`;
        const formattedFormData = {
            ...formData,
            dateOfBirth: dateOfBirth // Add formatted date of birth to formData
        };
    
        // Convert formatted form data to JSON
        const formDataJSON = JSON.stringify(formattedFormData, null, 2);
        
        // Log the JSON data to the console
        console.log('Form Data (JSON):', formDataJSON);
    };

    console.log('formData state:', formData);

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
                        handleInputChange={(fieldName, value) => handleInputChange(fieldName, value, setFormData)}
                        formData={formData}
                        isError={isError}
                        handleNext={() => {
                            setFormData({ ...formData, input });
                            handleNext();
                        }}
                    />
                )}
                {showFormTwo && (
                    <FormTwo
                        input={input}
                        handleInputChange={(fieldName, value) => handleInputChange(fieldName, value, setFormData)}
                        formData={formData}
                        isError={isError}
                        handleNext={() => {
                            setFormData({ ...formData, input });
                            handleNext();
                        }}
                        handleBack={handleBack}
                    />
                )}
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default GlobalForm;


