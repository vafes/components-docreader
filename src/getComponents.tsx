import Note from "./Note/Note";
import Header from "./Heading/Header";
import Code from "./Code/Code";
import Color from "./Color/Color";
import When from "./WhoWhen/When";
import Who from "./WhoWhen/Who";
import Image from "./Image/Image";
import Images from "./Images/Images";
import Anchor from "./Link/Anchor";


const getComponents = () => {
  return {
    Note,
    Heading: Header,
    Code,
    Color,
    Who,
    When,
    Image,
    "Img-h": Images,
		"Img-v": Images,
    Link: Anchor,
  };
};

export default getComponents