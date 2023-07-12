import styled from "@emotion/styled";
import React from "react";

const Header = styled(
	({
		level,
		id,
		children,
		className,
		logicPath,
		dataQa,
		...props
	}: {
		level: number;
		id?: string;
		children?: any;
		logicPath: string;
		className?: string;
		dataQa?: string;
		props?: any;
	}) => {
		logicPath = "logicPath" 
		let href = "#" + (id ?? "");
		let header = (
			<>
				{children}
				<a
					href={href}
					className="anchor"
					data-mdignore={true}
					contentEditable={false}
					onClick={() => {
						navigator.clipboard.writeText(
							window.location.protocol + "//" + window.location.host + "/" + logicPath + href
						);
					}}
				>
				</a>
			</>
		);
		return React.createElement("h" + level, { id, className, "data-qa": dataQa }, header);
	}
)`
	:hover > a.anchor {
		opacity: 0.5;
	}
	:hover > a.anchor:hover {
		opacity: 1;
	}

	> a.anchor {
		opacity: 0;
		font-size: 0.9em;
		line-height: inherit;
		margin-left: var(--distance-i-span);
		color: var(--color-article-text) !important;
	}

	sup {
		a.anchor {
			font-weight: inherit;
			color: var(--color-link);
		}
	}
`;

export default Header;
