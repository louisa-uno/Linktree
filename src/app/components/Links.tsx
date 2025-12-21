import Image from "next/image";
import type { ReactNode } from "react";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { on } from "events";

type LinkItem = {
	href: string;
	content: ReactNode;
	className?: string;
};

type LinkWithText = LinkItem & {
	href: string;
	content: string;
	label: string;
};

const iconOnlyLinks: LinkItem[] = [
	{
		href: "https://go.louisa.uno/matrix",
		content: (
			<Image
				src="/icon_matrix.svg"
				alt=""
				width={16}
				height={16}
				style={{
					width: "1em",
					height: "1em",
					filter: "brightness(0) invert(1)",
				}}
			/>
		),
	},
	{ href: "https://go.louisa.uno/signal", content: <i className="fa-brands fa-signal-messenger"></i> },
	{ href: "https://go.louisa.uno/spotify", content: <i className="fa-brands fa-spotify"></i>, },
	{ href: "mailto:linktree@louísa.com", content: <i className="fas fa-envelope"></i>, },
];

const iconTextLinks: LinkWithText[] = [
	{ href: "mastodon", content: "fa-brands fa-mastodon", label: "Fediverse" },
	{ href: "github", content: "fa-brands fa-github", label: "GitHub" },
	{ href: "notes", content: "fa-solid fa-book", label: "Notes" },
	{ href: "telegram", content: "fa-brands fa-telegram", label: "Telegram" },
	{ href: "steam", content: "fa-brands fa-steam", label: "Steam (Main)" },
	{ href: "cs", content: "fa-brands fa-steam", label: "Steam (Counter Strike)" },
	{ href: "youtube", content: "fa-brands fa-youtube", label: "YOUTUBE_SUBSCRIBERS YouTube" },
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

export function Links() {
	return (
		<>
			<div style={{
				maxWidth: "675px",
				display: "block",
				margin: "27px auto",
				width: "fit-content"
			}}>
				{iconOnlyLinks.map(({ href, content, className }) => (
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
						{content}
					</Anchor>
				))}
			</div>

			<div style={{
				maxWidth: "675px",
				width: "auto",
				display: "block",
				margin: "27px auto"
			}}>
				{iconTextLinks.map(({ href, content, label }) => (
					<Anchor key={href} href={`https://go.louisa.uno/${href}`}>
						<i className={content}>&nbsp;</i>
						{/* <FontAwesomeIcon icon={faSteam} size="xs" /> */}
						{label}
					</Anchor>
				))}
			</div>
		</>
	);
}
