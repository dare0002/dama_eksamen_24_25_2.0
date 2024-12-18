import Image from "next/image";

const HeroIndex = () => {
  return (
    <div className="w-full text-offwhite z-0 flex place-content-center">
      <div className="absolute  text-center w-full top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className=" text-4xl font-bold ">FOOFEST</h1>
        <h3 className="text-2xl">7-DAY FESTIVAL</h3>
      </div>
      <Image
        src="/heroimg.svg"
        width={1000}
        height={600}
        alt="abstract image in orange and pink"
      />
    </div>
  );
};

export default HeroIndex;
