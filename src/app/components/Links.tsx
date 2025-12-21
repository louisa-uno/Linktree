import Image from "next/image";
import type { ReactNode } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faEnvelope, faBook } from '@fortawesome/free-solid-svg-icons'
import { faSignalMessenger, faSpotify, faMastodon, faGithub, faTelegram, faSteam, faYoutube } from '@fortawesome/free-brands-svg-icons'

type LinkItem = {
	href: string;
	icon: IconDefinition | ReactNode;
};

type LinkWithText = LinkItem & {
	href: string;
	icon: IconDefinition | ReactNode;
	label: string;
};

const iconOnlyLinks: LinkItem[] = [
	{
		href: "https://go.louisa.uno/matrix",
		icon: (
			<Image
				src="/icon_matrix.svg"
				alt=""
				width={16}
				height={16}
				style={{
					width: "1em",
					height: "1em",
					filter: "brightness(0) invert(1)",
					alignSelf: "center",
					marginBottom: "-0.1em",
				}}
			/>
		),
	},
	{ href: "https://go.louisa.uno/signal", icon: faSignalMessenger },
	{ href: "https://go.louisa.uno/spotify", icon: faSpotify },
	{ href: "mailto:linktree@louísa.com", icon: faEnvelope },
	// {
	// 	href: "coffee", content:
	// 		<FontAwesomeIcon icon={faSteam} size="xs" />
	// },
];

const iconTextLinks: LinkWithText[] = [
	{ href: "mastodon", icon: faMastodon, label: "Fediverse" },
	{ href: "github", icon: faGithub, label: "GitHub" },
	{ href: "notes", icon: faBook, label: "Notes" },
	{ href: "telegram", icon: faTelegram, label: "Telegram" },
	{ href: "steam", icon: faSteam, label: "Steam (Main)" },
	{ href: "cs", icon: faSteam, label: "Steam (Counter Strike)" },
	{ href: "youtube", icon: faYoutube, label: "YOUTUBE_SUBSCRIBERS YouTube" },
];

const Anchor = ({
	href,
	children,
	style,
}: {
	href: string;
	children: ReactNode;
	style?: React.CSSProperties;
}) => (
	<a href={href} target="_blank" className="link" style={{
		position: "relative",
		backgroundColor: "transparent",
		color: "var(--accentColor)",
		border: "solid var(--accentColor) 2px",
		borderRadius: "10px",
		fontSize: "1rem",
		textAlign: "center",
		display: "block",
		marginLeft: "10px",
		marginRight: "10px",
		marginBottom: "10px",
		padding: "10px",
		textDecoration: "none",
		WebkitTapHighlightColor: "transparent",
		...style
	}}>
		{children}
	</a>
);

function returnIcon(icon: IconDefinition | ReactNode) {
	if (icon && typeof icon === 'object' && 'iconName' in icon) {
		return <FontAwesomeIcon icon={icon as IconDefinition} size="xs" style={{ width: "1em", height: "1em", marginRight: "0.15em", marginLeft: "0.15em", marginBottom: "-0.1em" }} />;
	} else {
		return icon;
	}
}

export function Links() {
	return (
		<>
			<div style={{
				maxWidth: "675px",
				display: "block",
				margin: "27px auto",
				width: "fit-content"
			}}>
				{iconOnlyLinks.map(({ href, icon }) => (
					<Anchor key={href} href={href}
						style={{
							position: "relative",
							backgroundColor: "transparent",
							color: "var(--accentColor)",
							border: "solid var(--accentColor) 2px",
							borderRadius: "10px",
							width: "1.2rem",
							height: "1.2rem",
							fontSize: "1rem",
							textAlign: "center",
							display: "inline-block",
							marginLeft: "10px",
							marginRight: "-5px",
							marginBottom: "10px",
							padding: "10px",
							textDecoration: "none",
							WebkitTapHighlightColor: "transparent"
						}}>
						{returnIcon(icon)}
					</Anchor>
				))}
			</div>

			<div style={{
				maxWidth: "675px",
				width: "auto",
				display: "block",
				margin: "27px auto"
			}}>
				{iconTextLinks.map(({ href, icon, label }) => (
					<Anchor key={href} href={`https://go.louisa.uno/${href}`}>
						{returnIcon(icon)}&nbsp;{label}
					</Anchor>
				))}
			</div>
		</>
	);
}
