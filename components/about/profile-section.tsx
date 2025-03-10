import Image from "next/image";
import ProfileImage from "@/public/images/profile/mine.jpeg";

export default function ProfileSection() {
    return (
        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-black bg-white p-8">
          <div className="bg-black absolute top-0 -right-3 w-[102%] h-[103%] -z-10 rounded-[2rem]" />
          <Image
            src={ProfileImage}
            alt="My Profile Image"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      );
} 