const PlaceholderSection = ({ id, label }: { id: string; label: string }) => (
	<section id={id} className="flex min-h-screen items-center justify-center">
		<p className="font-ivyora text-2xl italic text-brand">
			{label}
		</p>
	</section>
);

const KudakuTop = () => (
	<>
		<PlaceholderSection id="hero" label="Hero" />
		<PlaceholderSection id="statement" label="Statement" />
		<PlaceholderSection id="where-we-are" label="Where We Are" />
		<PlaceholderSection id="lets-talk" label="Let's Talk" />
	</>
);

export default KudakuTop;
