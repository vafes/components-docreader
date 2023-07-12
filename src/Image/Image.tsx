import React, { useContext, useState } from "react";
import Lightbox from "./modalImage/Lightbox";

const Image = ({ src, alt, title }: { src: string; alt?: string; title?: string }) => {
	const [isOpen, setOpen] = useState(false);
	
	

	return (
		<React.Fragment>
			<span className="lightbox">
				{isOpen && <Lightbox large={"resourceURL"} onClose={() => setOpen(false)} noneShadow={false} />}
			</span>
			<img src={"resourceURL"} onClick={() => setOpen(true)} alt={alt} data-focusable="true" />
			{title && <em>{title}</em>}
		</React.Fragment>
	);
};

export default Image;
