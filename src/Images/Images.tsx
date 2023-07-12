import Image from "../Image/Image";

const Images = ({
	images,
	postfix,
	contextPath,
	basePath,
}: {
	postfix: string;
	images: string[];
	contextPath: string;
	basePath: string;
}) => {
	return (
		<span className={`img-${postfix}`} contentEditable={false} data-type={`img${postfix}`}>
			{images.map((src, idx) => {
				return <Image src={src} key={idx} />;
			})}
		</span>
	);
};
export default Images;
