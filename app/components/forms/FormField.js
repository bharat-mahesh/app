import { useFormikContext } from 'formik';

import AppTextInput from '../ui/TextInput';
import ErrorMessage from './ErrorMessage';


const FormField = ({ name, ...otherProps }) => {
    
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                { ...otherProps }
            />

            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormField;