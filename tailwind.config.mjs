import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Dancing': ['Dancing Script Variable', 'cursive'],
				'Public': ['Public Sans Variable', 'sans-serif']
			}
		},
	},
	plugins: [animations],
}
