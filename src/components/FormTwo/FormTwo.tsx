import React, { useState } from 'react'

import styles from "@/components/FormTwo/FormTwo.module.scss"
import countriesData from "@/assets/data/countries.json"

import {
    Input,
    Select,
    RadioGroup,
    Radio,
    Stack,
    InputGroup,
    InputLeftAddon,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
} from '@chakra-ui/react'


interface FormTwoProps {
    input: string;
    handleInputChange: (fieldName: string, value: any) => void;
    formData: any;
    isError: boolean;
    handleNext: () => void;
    handleBack: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ input, handleInputChange, formData, isError, handleNext, handleBack }) => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedResidenceCountry, setSelectedResidenceCountry] = useState('');
    const [email, setEmail] = useState('');
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('Input Name:', name);
        console.log('Input Value:', value);
        handleInputChange(name, value);
    };

    const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedDayValue = event.target.value;
        console.log('Selected Day:', selectedDayValue);
        setSelectedDay(event.target.value);
        handleInputChange('Day', selectedDayValue);
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonthValue = event.target.value;
        console.log('Selected Month:', selectedMonthValue);
        setSelectedMonth(event.target.value);
        handleInputChange('Month', selectedMonthValue);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYearValue = event.target.value;
        console.log('Selected Year:', selectedYearValue);
        setSelectedYear(selectedYearValue);
        handleInputChange('Year', selectedYearValue);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1919 }, (_, index) => String(1920 + index));

    const handleGenderChange = (value: string) => {
        console.log('Selected Género:', value); 
        setSelectedGender(value); // Update the selected gender in local state
        handleInputChange('selectedGender', value); // Update formData with the selected gender
    };

    //Nationality
    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryValue = event.target.value;
        console.log('Selected Nacionalidad:', selectedCountryValue);
        setSelectedCountry(selectedCountryValue);
        handleInputChange('Nationality', selectedCountryValue); // Update formData with the selected country
        setSelectedCountry(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        console.log('Selected language:', selectedLanguage); // Log the selected language
        handleInputChange('Language', selectedLanguage); // Update formData with the selected language
        setSelectedLanguage(selectedLanguage);
    };

    const handleResidenceCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedResidenceCountry = event.target.value;
        console.log('Selected residence country:', selectedResidenceCountry); 
        handleInputChange('ResidenceCountry', selectedResidenceCountry); // Update formData with the selected residence country
        setSelectedResidenceCountry(selectedResidenceCountry); // Update the local state with the selected residence country
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailValue = e.target.value;
        console.log('Email value:', emailValue);
        handleInputChange('Email', emailValue); // Update formData with the email value
        setEmail(emailValue); // Update the local state with the email value
    };

    //Phone prefix and number
    const handlePhoneCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = event.target.value;
        console.log('Selected Phone Country:', selectedCountry);
        setSelectedPhoneCountry(selectedCountry); // Update the selected phone country in local state
        // Update the formData with the selected phone country
        handleInputChange('PhonePrefix', selectedCountry);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredPhoneNumber = event.target.value;
        console.log('Entered Phone Number:', enteredPhoneNumber);
        setPhoneNumber(enteredPhoneNumber); // Update the phone number in local state
        // Update the formData with the entered phone number
        handleInputChange('phone', enteredPhoneNumber);
    };

    return (
        <div className={styles.main}>
            <div className={styles.title}>2. Información personal</div>
            <div className={styles.subtitle}>
                Nombre <span className={styles.redAsterisk}>*</span>
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder='Nombre' onChange={handleChange} name="nombre" />
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder='Apellidos' onChange={handleChange} name="apellidos" />
            </div>
            <div>
                <div className={styles.subtitle}>
                    Fecha de nacimiento <span className={styles.redAsterisk}>*</span>
                </div>
                <div className={styles.selectWrapper}>
                    <Select placeholder="Día" value={selectedDay} onChange={handleDayChange}>
                        {[...Array(31)].map((_, index) => (
                            <option key={index + 1} value={String(index + 1)}>{index + 1}</option>
                        ))}
                    </Select>
                </div>
                <div className={styles.selectWrapper}>
                    <Select placeholder="Mes" value={selectedMonth} onChange={handleMonthChange}>
                        {[...Array(12)].map((_, index) => (
                            <option key={index + 1} value={String(index + 1)}>{index + 1}</option>
                        ))}
                    </Select>
                </div>
                <div className={styles.selectWrapper}>
                    <Select placeholder="Año" value={selectedYear} onChange={handleYearChange}>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </Select>
                </div>
            </div>
            <div className={styles.subtitle}>
                Género con el que te identificas <span className={styles.redAsterisk}>*</span>
            </div>
            <RadioGroup defaultValue={selectedGender} onChange={handleGenderChange}>
                <Stack spacing={1} direction='column'>
                    <Radio value='Hombre'>
                        <span className={styles.customRadioLabel}>Hombre</span>
                    </Radio>
                    <Radio value='Mujer'>
                        <span className={styles.customRadioLabel}>Mujer</span>
                    </Radio>
                    <Radio value='Transgénero Hombre'>
                        <span className={styles.customRadioLabel}>Transgénero Hombre</span>
                    </Radio>
                    <Radio value='Transgénero Mujer'>
                        <span className={styles.customRadioLabel}>Transgénero Mujer</span>
                    </Radio>
                    <Radio value='Otros'>
                        <span className={styles.customRadioLabel}>Otros</span>
                    </Radio>
                </Stack>
            </RadioGroup>
            <div className={styles.subtitle}>
                Nacionalidad <span className={styles.redAsterisk}>*</span>
            </div>
            <Select
                value={selectedCountry}
                onChange={handleCountryChange}
            >
                <option value="">Seleccionar país</option>
                {countriesData.map((country: any) => (
                    <option key={country.code} value={country.code}>
                        {`${country.name_es}`}
                    </option>
                ))}
            </Select>
            <div className={styles.subtitle}>
                Idioma <span className={styles.redAsterisk}>*</span>
            </div>
            <Select
                placeholder="Seleccione un idioma"
                value={selectedLanguage}
                onChange={handleLanguageChange}
            >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="ca">Catalán</option>
            </Select>
            <div className={styles.subtitle}>
                Lugar de residencia <span className={styles.redAsterisk}>*</span>
            </div>
            <Select
                value={selectedResidenceCountry}
                onChange={handleResidenceCountryChange}
            >
                <option value="">Seleccionar país de residencia</option>
                {countriesData.map((country: any) => (
                    <option key={country.code} value={country.name_es}>
                        {`${country.name_es}`}
                    </option>
                ))}
            </Select>
            <div className={styles.subtitle}>
                Correo electrónico <span className={styles.redAsterisk}>*</span>
            </div>
            <FormControl isInvalid={isError}>
                <FormLabel>Correo electrónico</FormLabel>
                <Input
                    type='email'
                    placeholder='ejemplo@helpfulthinking.com'
                    value={email}
                    onChange={handleEmailChange}
                />
                {/* {isError ? (
                    <FormErrorMessage>El correo electrónico es obligatorio.</FormErrorMessage>
                ) : (
                    <FormHelperText>

                    </FormHelperText>
                )} */}
            </FormControl>
            <div className={styles.subtitle}>
                Teléfono <span className={styles.redAsterisk}>*</span>
            </div>
            <InputGroup>
                <InputLeftAddon>
                    <select
                        value={selectedPhoneCountry}
                        onChange={handlePhoneCountryChange}
                        placeholder="País"
                    >
                        <option value="">Selecciona</option>
                        {countriesData.map((country: any) => (
                            <option key={country.code} value={country.dial_code}>
                                {`${country.emoji} ${country.code} (${country.dial_code})`}
                            </option>
                        ))}
                    </select>
                </InputLeftAddon>
                <Input
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="612 34 56 78"
                />
            </InputGroup>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default FormTwo