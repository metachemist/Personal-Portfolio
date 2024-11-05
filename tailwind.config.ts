import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			baseGreen: '#334b35',
  			baseYellow: '#fdad17',
  			baseOrange: '#bb5d39',
  			baseBeige: '#f6eee1',
  			baseBlack: '#010103',
			baseBrown: '#e9d1b9',
			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  textStrokeWidth: {
			'2': '2px',
			'1' : '1px', // Define the stroke width
		  },
		  textStrokeColor: {
			baseYellow: '#fdad17', // Define the baseYellow color
		  },
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"),
	plugin(function ({ addUtilities }) {
		const newUtilities = {
		  '.text-stroke-1': {
			'-webkit-text-stroke-width': '1px',
			'text-stroke-width': '1px',
		  },
		  '.text-stroke-2': {
			'-webkit-text-stroke-width': '2px',
			'text-stroke-width': '2px',
		  },
		  '.text-stroke-baseYellow': {
			'-webkit-text-stroke-color': '#FFD700',
			'text-stroke-color': '#FFD700',
		  },
		};
		addUtilities(newUtilities);
	  }),
  ],
};
export default config;
