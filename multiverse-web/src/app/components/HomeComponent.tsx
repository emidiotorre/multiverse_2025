import Image from "next/image";
import Book from "../../../public/materiale/home/book.png";
import Hand_ from "../../../public/materiale/home/hand.png";
import Shuttle from "../../../public/materiale/home/shuttle.png";
import Tower from "../../../public/materiale/home/tower.png";
import Draggable from "./Draggable";

function HomeComponent() {
  return (
    <div className="relative h-[50vw] w-full  ">
      <Image
        className=" w-full select-none pointer-events-none px-8"
        src={"/footerone_nero.svg"}
        quality={80}
        fill
        alt={""}
      />
    </div>
  );
}
export default HomeComponent;
