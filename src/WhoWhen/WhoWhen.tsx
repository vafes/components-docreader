

export default function WhoWhen({ text, isWhen }: { text: string; isWhen: boolean }) {
	return (
		<span className="attr">
			<span className="delimiter">/</span>
		
			<span>{text}</span>
		</span>
	);
}
