import Image from "next/image";

const MyPicture = () => {
  return (
    <div className="w-[240px] h-[240px] overflow-hidden rounded-[20px] absolute top-16 z-10">
      <Image
        src="/my-picture.jpg"
        alt="Mohamed personal picture"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
export default MyPicture;
