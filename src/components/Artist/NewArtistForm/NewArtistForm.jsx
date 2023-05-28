import { useFormik } from "formik";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Form, Image } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import { initialValues, validationSchema } from "./NewArtistForm.data";
import { Artist, Storage } from "../../../api";
import { noImage } from "../../../assets";
import "./NewArtistForm.scss";

export const NewArtistForm = ({onClose}) => {

    const [image, setImage] = useState(null);

    const storage = new Storage();
    const { uploadFile, getUrlFile } = storage;

    const artist = new Artist();
    const { create } = artist;

    const onDrop = useCallback(async (acceptedFile) => {
        const file = acceptedFile[0];
        setImage(URL.createObjectURL(file));
        formik.setFieldValue("file", file);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const { file, name } = formValue;
                const response = await uploadFile(
                    file,
                    "artist",
                    uuidv4()
                );
                const url = await getUrlFile(
                    response.metadata.fullPath
                );
                await create(url, name);
                onClose();
            } catch (error) {
                console.error(error);
            }
        },
    });
    return (
        <Form className="new-artist-form" onSubmit={formik.handleSubmit}>
            <div
                {...getRootProps()}
                className={classNames("new-artist-form__banner", {
                    error: formik.errors.file,
                })}
            >
                <input {...getInputProps()} />
                <Image src={image || noImage} className={classNames({ full: image })} />
            </div>

            <Form.Input
                name="name"
                placeholder="Artist's name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
            />

            <Form.Button className="button" type="submit" primary fluid loading={formik.isSubmitting}>
                Create artist
            </Form.Button>
        </Form>
    )
}
