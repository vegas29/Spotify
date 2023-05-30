import { useLottie }  from "lottie-react";
import { loader } from '../../assets';

export const Loading = () => {

    const options = {
        animationData: loader,
        loop: true,
        style: {
            height: 200
        }
    };

    const { View } = useLottie(options);

    return (
        <div style={{height: '100vh', width: '100wh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            {View}
        </div>
    )
}
