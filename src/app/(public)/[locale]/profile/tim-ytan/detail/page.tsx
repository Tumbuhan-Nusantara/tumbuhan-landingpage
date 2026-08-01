import Nav from "@/src/components/Navbar-2";
import MemberHero from "@/src/components/TeamDetail/MemberHero";
import MemberBiography from "@/src/components/TeamDetail/MemberBiography";
import MemberPublication from "@/src/components/TeamDetail/MemberPublication";


const TeamDetailPage = () => {
  return (
    <>
      <Nav />

      <main className="bg-white">

        <MemberHero />

        <MemberBiography />

        {/* <MemberResearch /> */}

        <MemberPublication />

        {/* <MemberActivity/> */}

      </main>

    </>
  );
};

export default TeamDetailPage;