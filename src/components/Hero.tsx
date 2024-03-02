import SearchBox from "./SearchBox";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <section className=" bg-hero xl:bg-cover bg-center bg-no-repeat  ">
      <Navbar/>
      <div className="pt-24 pb-12 xl:py-0 xl:h-[1000px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-center xl:justify-start">
        <SearchBox/>
      </div>
      </div>
    </section>
  );
}

export default Hero;