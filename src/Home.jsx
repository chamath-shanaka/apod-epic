import ApodHero from "./APOD/ApodHero";
import EpicHero from "./EPIC/EpicHero";
// import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
// import LoginModal from "./LoginModal";

export default function Home() {
  // const { isAuthenticated, isLoading } = useKindeAuth();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col lg:flex-row">
      <EpicHero />
      <ApodHero />
    </div>
  );
}
