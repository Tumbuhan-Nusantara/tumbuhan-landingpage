import Hero from "@/src/components/Hero";
import Nav from "@/src/components/Navbar-2";

const HomeFeat = () => {
  return (
    <div className="bg-linear-to-l from-[#C7FCDC] to-white">
      <div className="container mx-auto">
        <Nav />
        <Hero />
      </div>
    </div>
  );
};

export default HomeFeat;
