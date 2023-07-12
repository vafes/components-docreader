import React from "react"; 
import Renderer from "./Renderer";
import getComponents from "./getComponents";
import article from "./text.json";



const App = () => {
  return (
    <div>
    <div>
      <div>fghjkl;kjhgfdcghjkl;kjhgf</div>
      <div>{Renderer(article, { components: getComponents() })}</div>
    </div>
   </div>
  );
};

export default App;
