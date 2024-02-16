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
    InputLeftAddon
} from '@chakra-ui/react'


interface FormTwoProps {
    input: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
    handleNext: () => void;
    handleBack: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ input, handleInputChange, isError, handleNext, handleBack }) => {
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedResidenceCountry, setSelectedResidenceCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDay(event.target.value);
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(event.target.value);
    };

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1919 }, (_, index) => String(1920 + index));

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(event.target.value);
    };

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const handlePhoneCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedPhoneCountry(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleResidenceCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedResidenceCountry(event.target.value);
    };

    return (
        <div className={styles.main}>
            <div className={styles.title}>2. Información personal</div>
            <div className={styles.subtitle}>
                Nombre <span className={styles.redAsterisk}>*</span>
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder='Nombre' />
            </div>
            <div className={styles.inputWrapper}>
                <Input placeholder='Apellidos' />
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
            <RadioGroup defaultValue='' onChange={(value) => console.log(value)}>
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
                    <option key={country.code} value={country.dial_code}>
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
            <Input placeholder="ejemplo@helpfulthinking.com" />
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
                                {`${country.emoji} ${country.name_es} (${country.dial_code})`}
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