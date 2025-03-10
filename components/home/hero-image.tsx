import Image from "next/image";
import HomeAvatar from "@/public/images/profile/developer-pic-1.png";

const HeroImage = () => <Image src={HomeAvatar} alt="home-avatar" className="w-full h-auto"/>;

export default HeroImage;