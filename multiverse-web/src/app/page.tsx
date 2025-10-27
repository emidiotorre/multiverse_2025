import { fetcher } from "./apollo";
import { GET_HOME } from "./apollo/queries";
import HomeComponent from "./components/HomeComponent";
import Logo from "./components/Logo";
import Container from "./components/Container";

export default async function Home() {
  //@ts-ignore
  const { home } = await fetcher({ query: GET_HOME, variables: null });

  return (
    <>
      <Container>
        <div className="flex flex-col">
          <h1
            key={home.id}
            className=" w-full text-[1.5rem] md:text-5xl  pb-8 break-words leading-[1] overflow-visible pt-4"
          >
            {/*<span>{home?.header}</span>*/}
            Multiverse is a multidimensional laboratory that combines multiple
            universes thanks to the professional who make up the team. We create
            highly distinctive visual identities by focusing on the concept and
            storytelling. Creative agency, specialized in brand identity, 3D
            adv, 2D animation and illustrations.
          </h1>
        </div>
      </Container>
    </>
  );
}
