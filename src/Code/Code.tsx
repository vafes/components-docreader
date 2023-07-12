import { useState } from "react";



export default function Code({ children }: { children: string }) {
	const [copped, setCopped] = useState(false);


	return (
		<span
			className="inline-code"
			onClick={() => {
				setCopped(true);
				navigator.clipboard.writeText(children);
			}}
			onMouseLeave={() => {
				setCopped(false);
			}}
		>
			<code>{"\u00A0" + children + "\u00A0"}</code>
		</span>
	);
}
