"use client";
import AnimationDiv from "./components/AnimationDiv";
import Container from "./components/Container";

export default function Home() {
  return (
    <>
      <Container>
        <div>
          <h1 className=" relative font-sans font-semibold max-w-[80vw] text-5xl pb-10 break-words leading-[1.2]">
            <span className="float-left pt-[0.5rem] px-3 -mb-4">
              <img
                className="object-scale-down h-full w-[15vh]"
                src={`${"../materiale/home/img1.png"}`}
              ></img>
            </span>
            <span className="inline-flex">
              <img
                className="object-scale-down h-full w-[40vh]"
                src={`${"../materiale/mvs_logo.png"}`}
              ></img>
            </span>
            is a multidimensional laboratory that combines
            <span className="flex justify-center">
              <AnimationDiv>
                <img
                  style={{
                    pointerEvents: "none",
                  }}
                  className="object-coverh-full w-[15vh]"
                  src={`${"../materiale/home/img2.png"}`}
                ></img>
              </AnimationDiv>
            </span>
            <span>
              multiple universes thanks to the professional who make up the
              team. we create highly distinctive visual identities by focusing
              on the concept and storytelling. creative agency,
              <span className="relative justify-start"></span>
              <AnimationDiv>
                <img
                  style={{
                    pointerEvents: "none",
                  }}
                  className="object-coverh-full w-[15vh]"
                  src={`${"../materiale/home/img3.png"}`}
                ></img>
              </AnimationDiv>
            </span>
            <span>
              specialized in brand identity, 3D adv, 2D animation and
              illustrations, NFT and Metaverse.
            </span>
            <span className="relative">
              <AnimationDiv>
                <img
                  style={{
                    pointerEvents: "none",
                  }}
                  className="object-coverh-full w-[15vh]"
                  src={`${"../materiale/home/img4.png"}`}
                ></img>
              </AnimationDiv>
            </span>
          </h1>
        </div>
      </Container>
    </>
  );
}
