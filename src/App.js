 import { Allitems } from "./Component/Allitems";
import { Bg } from "./Component/Bg";
import { Bkg } from "./Component/Bkg";
 import { Category } from "./Component/Category";
import { Content } from "./Component/Content";
import { Header } from "./Component/Header";
import { Hero } from "./Component/Hero";

function App() {
  return (
    <div className="App">
<Header/>
<Hero/>
<Category/>
<Allitems/>
<Content/>
<Bkg/>
<Bg/>

        </div>
  );
}

export default App;
