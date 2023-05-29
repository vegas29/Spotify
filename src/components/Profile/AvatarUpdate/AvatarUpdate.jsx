import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "semantic-ui-react";
import { Storage, User } from "../../../api";
import { defaultUser } from "../../../assets";
import "./AvatarUpdate.scss";

export const AvatarUpdate = () => {

    const auth = new User();
    const storage = new Storage();

    const { getMe, updateAvatarUser } = auth;
    const { uploadFile, getUrlFile } = storage;

    const { photoURL, uid } = getMe()
    const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser);

    const onDrop = useCallback( async(acceptedFile) => {
        const file =acceptedFile[0];
        setAvatarUrl(URL.createObjectURL(file));
        console.log({file})
        const { metadata } = await uploadFile(file, "avatar", uid);
        const { fullPath } = metadata;
        const url = await getUrlFile(fullPath);
        const response = await updateAvatarUser(url);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({onDrop});

    return (
        <div className="avatar-update" {...getRootProps()}>
            <input {...getInputProps()}/>
            <Image src={avatarUrl} />
        </div>
    )
}
