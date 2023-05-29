import { useCallback, useEffect, useState } from "react";
import { Form, Image } from "semantic-ui-react";

import { useFormik } from "formik";
import { map } from "lodash";
import { initialValues, validationSchema } from "./AddAlbumForm.data";
import { Album, Artist, Storage } from "../../../api";
import { noImage } from "../../../assets";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";
import './AddAlbumForm.scss';
import { fileUpload } from "../../../helpers/fileUpload";


export const AddAlbumForm = ({onClose}) => {

    const [image, setImage] = useState(noImage);
    const [fileUrl, setFileUrl] = useState(null);
    const [artistOptions, setArtistOptions] = useState([]);

    const artist = new Artist();
    const { obtainAll } = artist;
    
    const album = new Album();
    const { create } = album;

    useEffect(() => {
        (async () => {
            try {
                const response = await obtainAll();
                const newData = map(response, (artist) => ({
                    key: artist.id,
                    value: artist.id,
                    text: artist.name,
                }));
                setArtistOptions(newData);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onDrop = useCallback(async (acceptedFile) => {
        const file = acceptedFile[0];
        setFileUrl(file);
        setImage(URL.createObjectURL(file));
        formik.setFieldValue("image", file);
    }, []);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: true,
        onSubmit: async (formValue) => {
            try {
                const { name, artist } = formValue;
                const url = await fileUpload(fileUrl);
                await create(name, url, artist);
                onClose();
            } catch (error) {
                console.error(error);
            }
        },
    });

    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    return (
        <Form className="add-album-form" onSubmit={formik.handleSubmit}>
            <div className="add-album-form__content">
                <div
                    {...getRootProps()}
                    className={classNames("add-album-form__content-image", {
                        error: formik.errors.image,
                    })}
                >
                    <input {...getInputProps()} />
                    <Image src={image} />
                </div>

                <div className="add-album-form__content-inputs">
                    <Form.Input
                        name="name"
                        placeholder="Album name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.errors.name}
                    />
                    <Form.Dropdown
                        placeholder="The album is owned by..."
                        fluid
                        search
                        selection
                        options={artistOptions}
                        value={formik.values.artist}
                        onChange={(_, data) => formik.setFieldValue("artist", data.value)}
                        error={formik.errors.artist}
                    />
                </div>
            </div>

            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                Create album
            </Form.Button>
        </Form>
    )
}
