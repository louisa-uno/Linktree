'use client';
import React, { useRef } from "react";

type DoubleClickProps = {
	children: React.ReactNode;
	href?: string;
	threshold?: number;
} & React.HTMLAttributes<HTMLElement>;

export function DoubleClick({
	children,
	href = "https://go.louisa.uno/flame",
	threshold = 500,
	...rest
}: DoubleClickProps) {
	const lastClick = useRef<number>(0);

	function handleClick() {
		const now = Date.now();
		if (now - lastClick.current < threshold) {
			window.location.href = href;
		}
		lastClick.current = now;
	}

	return (
		<span onClick={handleClick} role="button" tabIndex={0} {...rest}>
			{children}
		</span>
	);
}