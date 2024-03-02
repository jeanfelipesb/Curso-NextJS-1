import Image from "next/image";

export default function Background(){
    return (
        <Image
            src={'https://www.pixelstalk.net/wp-content/uploads/images6/4K-Star-Wars-HD-Wallpaper-Computer.jpg'}
            fill
            alt="background"
            className="-z-50 opacity-30 object-cover"
        />
    )
}