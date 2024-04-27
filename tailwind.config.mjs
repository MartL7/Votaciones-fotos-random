import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Merri': ['Merriweather Variable', 'serif'],
				'Oswald': ['Oswald Variable', 'sans-serif'],
				'Dancing': ['Dancing Script Variable', 'Oswald Variable'],
				'Public': ['Public Sans Variable', 'sans-serif']
			},
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				twitch: "var(--color-twitch)",
				ice: "var(--color-twitch-ice)",
			},
		},
	},
	plugins: [animations],
}
