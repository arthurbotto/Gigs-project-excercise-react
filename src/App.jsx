import Gig from "./components/Gig";
import ClickListener from "./components/ClickListener";
import InputListener from "./components/Input";
import "./App.css";

function App() {
  return (
    <>
      <Gig
        title="Twenty One pilots"
        image="/images/top-logo.png"
        description="Dynamic duo blending alt-rock, hip-hop & indie vibes"
        time="30 of September, 2025"
        location="Wembley Stadium, London, UK"
       />
       <Gig
        title="Red Hot Chili Peppers"
        image="/images/red-hot-chili-peppers-logo.png"
        description="Legendary funk-rock icons from LA"
        time="10 of October, 2025"
        location="Wembley Stadium, London, UK"
       />
       <ClickListener />
       <InputListener />
       
    </>
  );
}

export default App;
