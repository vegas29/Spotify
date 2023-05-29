import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { Form, Icon } from "semantic-ui-react";
import { map } from "lodash";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { Album, Song, Storage } from "../../../api";
import { initialValues, validationSchema } from "./AddSongForm.data";
import './AddSongForm.scss';
import { fileUpload } from "../../../helpers/fileUpload";

export const AddSongForm = ({ onClose }) => {

    const [songName, setSongName] = useState("");
    const [albumsOptions, setAlbumsOptions] = useState([]);
    const [fileUrl, setFileUrl] = useState(null);

    const album = new Album();
    const { obtainAll } = album;

    const song = new Song();
    const { create } = song;

    const storage = new Storage();
    const { uploadFile, getUrlFile } = storage;

    useEffect(() => {
        (async () => {
            try {
                const response = await obtainAll();
                const result = map(response, (item) => ({
                    key: item.id,
                    value: item.id,
                    text: item.name,
                }));
                setAlbumsOptions(result);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    const onDrop = useCallback(async (acceptedFile) => {
        const file = acceptedFile[0];
        setFileUrl(file);
        setSongName(file.name);
        formik.setFieldValue("file", file);
        formik.setFieldValue("name", file.name);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: true,
        onSubmit: async (formValue) => {
            try {
                const { file, name, album } = formValue;
                const url = await fileUpload(fileUrl);
                await create(name, album, url);
                onClose();
            } catch (error) {
                console.error(error);
            }
        },
    });



    return (
        <Form className="add-song-form" onSubmit={formik.handleSubmit}>
            <Form.Input
                name="name"
                placeholder="Name of the song"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
            />
            <Form.Dropdown
                placeholder="Assign the song to an album"
                fluid
                search
                selection
                options={albumsOptions}
                value={formik.values.album}
                onChange={(_, data) => formik.setFieldValue("album", data.value)}
                error={formik.errors.album}
            />

            <div
                {...getRootProps()}
                className={classNames("add-song-form__file", {
                    error: formik.errors.file,
                })}
            >
                <input {...getInputProps()} />
                <Icon name="cloud upload" />
                <div>
                    <p>
                        Drag your song or click <span>here</span>
                    </p>
                    {songName && <p className="song-name">{songName}</p>}
                </div>
            </div>

            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                Upload song
            </Form.Button>
        </Form>
    )
}
