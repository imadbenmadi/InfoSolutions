import React from "react";
import CardModel from "../Components/homePage/CardModel";

function Home() {
  return (
    <div className="md:px-32 p-5 overflow-y-scroll md:h-96 ">
      <div className=" grid gap-5  grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
        <CardModel shortNameModel="pl" modelNama="Programation Linéer" />
        <CardModel shortNameModel="PS" modelNama=" probability statistics" />
        <CardModel shortNameModel="SM" modelNama="Systéme Machine" />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
