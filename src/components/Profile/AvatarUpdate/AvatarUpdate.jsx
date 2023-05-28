import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "semantic-ui-react";
import { User } from "../../../api";
import { defaultUser } from "../../../assets";
import "./AvatarUpdate.scss";

export const AvatarUpdate = () => {

    const auth = new User();
    const { getMe } = auth;

    const { photoURL } = getMe()
    const [avatarUrl, setAvatarUrl] = useState(photoURL || defaultUser);

    const onDrop = useCallback( async(acceptedFile) => {
        const file =acceptedFile[0];
        setAvatarUrl(URL.createObjectURL(file));
    }, []);

    const { getRootProps, getInputProps } = useDropzone({onDrop});

    return (
        <div className="avatar-update" {...getRootProps()}>
            <input {...getInputProps()}/>
            <Image src={avatarUrl} />
        </div>
    )
}
