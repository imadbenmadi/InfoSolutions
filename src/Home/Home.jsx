import React from "react";
import CardModel from "../Components/homePage/CardModel";
import CardOfMember from "../Components/homePage/CardOfMember";
import imgSalah from "../assets/salah.jpg";
import imgImad from "../assets/imad.jpg";
function Home() {
  return (
    <div className="md:px-32 p-5  ">
      <div className=" grid gap-5 min-h-fit h-screen   grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <CardModel shortNameModel="pl" modelNama="Programation Linéer" />
        <CardModel shortNameModel="PS" modelNama=" probability statistics" />
        <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
      </div>
      <div className=" py-5 my-5">
        <div className="font-bold mx-auto text-xl text-center py-5 md:p-10 md:text-3xl">
          {" "}
          How Make This Platform ?{" "}
        </div>
        <div className=" mx-auto grid max-w-4xl gap-5    grid-cols-2 max-lg:grid-cols-1 max-md:grid-cols-1">
          <CardOfMember
            image={imgSalah}
            fullName="salah eddine khenfer"
            skilles=" full stack"
            dec="I'm delighted to develop this website aimed at assisting individuals in accomplishing various tasks and enhancing their studying experience "
          />
          <CardOfMember
            image={imgImad}
            fullName="imad eddine benmadi "
            skilles=" full stack"
            dec="I'm thrilled to be working on this website dedicated to helping people tackle a wide range of tasks and enriching their learning journey"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
