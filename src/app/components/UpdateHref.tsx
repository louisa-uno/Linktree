// ...existing code...
'use client';
import React, { useEffect, useRef } from 'react';

export function UpdateHref({ selector, link1, link2 }: { selector: string; link1: string; link2: string }) {
	const rafRef = useRef<number | null>(null);

	useEffect(() => {
		const update = () => {
			document.querySelectorAll<HTMLAnchorElement>(selector).forEach((a) => {
				const opacity = parseFloat(getComputedStyle(a).opacity || '1');
				a.href = opacity > 0.5 ? link2 : link1;
			});
			rafRef.current = requestAnimationFrame(update);
		};

		rafRef.current = requestAnimationFrame(update);
		return () => {
			if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return null;
}