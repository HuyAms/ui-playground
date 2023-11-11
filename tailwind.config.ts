import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    spacing: {
			0: "0px",
			1: "2px",
			2: "4px",
			3: "8px",
			4: "12px",
			5: "16px",
			6: "24px",
			7: "32px",
			8: "40px",
			9: "48px",
			layout1: "16px",
			layout2: "24px",
			layout3: "32px",
			layout4: "48px",
			layout5: "64px",
			layout6: "96px",
			layout7: "160px",
    },
    extend: {},
  },
  plugins: [],
} satisfies Config