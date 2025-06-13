import News from "../Pages/News";
import HomeArtifacts from "./HomeArtifacts";
import HomeLibrary from "./HomeLibrary";
import HomeMonuments from "./HomeMonuments";
import HomeMuseums from "./HomeMuseums";
import HomeNews from "./HomeNews";
import Video from "./Video";

function Home() {
  return (
    <div className="">
      <Video />
      <HomeNews />
      <HomeMonuments />
      <HomeArtifacts />
      <HomeMuseums />
      <HomeLibrary />
    </div>
  );
}
export default Home;
