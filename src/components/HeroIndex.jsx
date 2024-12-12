import Image from "next/image";
const HeroIndex = () => {
  return (
    <div>
      <div className="absolute -inset-36 text-center ">
        <h1 className=" text-4xl font-bold ">FOOFEST</h1>
        <h3 className="text-3xl">7-DAY FESTIVAL</h3>
      </div>
      <Image
        src="/hero.png"
        width={1000}
        height={800}
        alt="abstract image in orange and pink"
      />
    </div>
  );
};

export default HeroIndex;
