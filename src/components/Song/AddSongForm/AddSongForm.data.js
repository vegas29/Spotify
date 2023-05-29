import * as Yup from "yup";

export function initialValues() {
    return {
        name: "",
        album: "",
        file: null,
    };
}

export function validationSchema() {
    return Yup.object({
        name: Yup.string().required('The name is required'),
        album: Yup.string().required('The album is required'),
        file: Yup.string().required(true),
    });
}