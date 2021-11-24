import { useState } from "react";
import ImageComp from "./ImageComp";

const HomePage = () => {

    const [image, setImage] = useState('https://cdn.vox-cdn.com/thumbor/E9RM8-qg-iyLEAzP4d7tobqI09o=/0x0:2012x1341/1400x933/filters:focal(0x0:2012x1341):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg')
    const [alt, setAlt] = useState('Google Image')


    return (
       <>
        <ImageComp image={image} alt={alt}/>
        <ImageComp image={image} alt={alt}/>
        <ImageComp image={image} alt={alt}/>
        <ImageComp image={image} alt={alt}/>
       </>
    )
}

export default HomePage;