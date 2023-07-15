/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			tablet: "768px",
			desktop: "1280px",
		},
		extend: {
			boxShadow: {
				xs: "0px 1px 1px rgba(24, 24, 27, 0.06), 0px 0px 0px rgba(24, 24, 27, 0.08), 0px 0px 0px rgba(24, 24, 27, 0.08)",
				sm: "0px 2px 1px rgba(24, 24, 27, 0.01), 0px 1px 1px rgba(24, 24, 27, 0.05), 0px 1px 1px rgba(24, 24, 27, 0.09), 0px 0px 0px rgba(24, 24, 27, 0.1), 0px 0px 0px rgba(24, 24, 27, 0.1);",
				md: "0px 5px 2px rgba(24, 24, 27, 0.03), 0px 3px 2px rgba(24, 24, 27, 0.1), 0px 1px 1px rgba(24, 24, 27, 0.17), 0px 0px 1px rgba(24, 24, 27, 0.2), 0px 0px 0px rgba(24, 24, 27, 0.2);",
				lg: "0px 25px 7px rgba(24, 24, 27, 0.01), 0px 16px 6px rgba(24, 24, 27, 0.04), 0px 9px 5px rgba(24, 24, 27, 0.15), 0px 4px 4px rgba(24, 24, 27, 0.26), 0px 1px 2px rgba(24, 24, 27, 0.29), 0px 0px 0px rgba(24, 24, 27, 0.3);",
			},
			fontFamily: {
				inter: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				transparent: 'transparent',
				blacks: {
					50: "#E6E6E6",
					100: "#CCCCCC",
					200: "#999999",
					300: "#666666",
					400: "#333333",
					500: "#000000",
					600: "#000000",
					700: "#000000",
					800: "#000000",
					900: "#000000",
					950: "#000000"
				  },
				whites: {
					50: "#FCFCFC",
					100: "#FCFCFC",
					200: "#FCFCFC",
					300: "#FCFCFC",
					400: "#FCFCFC",
					500: "#FCFCFC",
					600: "#FCFCFC",
					700: "#FFFFFF",
					800: "#D6D6D6",
					900: "#9C9C9C",
					950: "#737373"
				  },
				blues: {
					50: "#DCDFFF",
					100: "#B3B9FE",
					200: "#6774FE",
					300: "#1B2EFD",
					400: "#0212CA",
					500: "#010C80",
					600: "#010965",
					700: "#01074C",
					800: "#000533",
					900: "#000219",
					950: "#00010F"
				  },
				yellows: {
					50: "#FFFDF0",
					100: "#FFFBE0",
					200: "#FFF7C2",
					300: "#FFF3A3",
					400: "#FFEE80",
					500: "#FFE957",
					600: "#FFE229",
					700: "#FFDC00",
					800: "#D1B500",
					900: "#998500",
					950: "#706100"
				  },
				grays: {
					50: "#F0F0F0",
					100: "#E0E0E0",
					200: "#BFBFBF",
					300: "#A1A1A1",
					400: "#808080",
					500: "#616161",
					600: "#404040",
					700: "#212121",
					800: "#171717",
					900: "#0A0A0A",
					950: "#050505"
				  },
				oranges: {
					50: "#FEF8F1",
					100: "#FDEEDD",
					200: "#FBDDBB",
					300: "#FACF9E",
					400: "#F8BE7D",
					500: "#F6AD5B",
					600: "#F49D39",
					700: "#F28C18",
					800: "#A95F0A",
					900: "#522E05",
					950: "#2B1802"
				  },
				purples: {
					50: "#EEEBFA",
					100: "#DAD2F4",
					200: "#B9AAE9",
					300: "#947DDE",
					400: "#7255D3",
					500: "#5231BF",
					600: "#3F2692",
					700: "#2D1B69",
					800: "#1E1245",
					900: "#100925",
					950: "#070410"
				  },
				pinks: {
					50: "#FFEBFA",
					100: "#FFD6F5",
					200: "#FFB3ED",
					300: "#FF8AE4",
					400: "#FF66DB",
					500: "#FF3DD2",
					600: "#FF1AC9",
					700: "#F000B8",
					800: "#9E0079",
					900: "#52003F",
					950: "#29001F"
				  },
				azures: {
					50: "#F3FCFB",
					100: "#E2F8F6",
					200: "#C6F1EC",
					300: "#A9EAE3",
					400: "#8DE2DA",
					500: "#70DBD1",
					600: "#54D4C7",
					700: "#37CDBE",
					800: "#238B80",
					900: "#114540",
					950: "#092522"
				  },
				darks: {
					50: "#EDEFF2",
					100: "#DEE1E8",
					200: "#BAC1CF",
					300: "#99A3B8",
					400: "#75839E",
					500: "#5A6781",
					600: "#414A5D",
					700: "#2A303C",
					800: "#1B1F27",
					900: "#0F1115",
					950: "#060709"
				  },
				greens: {
					50: "#F2FFE5",
					100: "#E5FFCC",
					200: "#CDFF9E",
					300: "#B3FF6B",
					400: "#9BFF3D",
					500: "#81FF0A",
					600: "#68D600",
					700: "#51A800",
					800: "#367000",
					900: "#1B3800",
					950: "#0C1900"
				  },
				darkreds: {
					50: "#FFE5E5",
					100: "#FFCCCC",
					200: "#FF9494",
					300: "#FF6161",
					400: "#FF2929",
					500: "#F50000",
					600: "#C20000",
					700: "#8B0000",
					800: "#5C0000",
					900: "#2E0000",
					950: "#190000"
				  },
				skys: {
					50: "#F0FAFE",
					100: "#E1F5FE",
					200: "#C4ECFD",
					300: "#ABE4FC",
					400: "#8EDAFB",
					500: "#70D1FA",
					600: "#53C7F9",
					700: "#38BDF8",
					800: "#078CC5",
					900: "#034663",
					950: "#022331"
				  },
				night: {
					50: "#E8EDF7",
					100: "#CED8EE",
					200: "#A1B3DD",
					300: "#708CCC",
					400: "#4265B8",
					500: "#324C8B",
					600: "#20325A",
					700: "#0F172A",
					800: "#090E1A",
					900: "#05080F",
					950: "#030408"
				  },
				hovers: {
					50: "#FDFAFF",
					100: "#FBF6FE",
					200: "#F8ECFD",
					300: "#F6E8FD",
					400: "#F2DFFC",
					500: "#EFD5FB",
					600: "#EBCCFA",
					700: "#E8C4F9",
					800: "#B43DEB",
					900: "#600E86",
					950: "#320745"
				  },
				reds: {
					50: "#FDF2F2",
					100: "#F9E1E1",
					200: "#F4C3C3",
					300: "#EFA9A9",
					400: "#E98B8B",
					500: "#E36D6D",
					600: "#DD4F4F",
					700: "#D83333",
					800: "#961D1D",
					900: "#490E0E",
					950: "#270707"
				  },
				"dark-grey": "#151515", // heading 1
				"rice-flower": "#EFFFE2", // heading 2

				silver: "#C7C7C7", // body1 / gradient !!!
			
				tundora: "#414141", // body2

				boulder: "#757575", // small

				"cod-gray": "#1A1A1A", // screen bg
				malibu: "#44DBFF", // code

				harlequin: "#53FB2A", // score
				sunflower: "#E9E11F",

				"hollywood-cerise": "#FF069C", // footer heart

				// bricks
				endeavour: "#0165B1",
				thunderbird: "#D12510",
				koromiko: "#FEC05C",
				"gull-gray": "#97B1B2",

				mercury: "#E8E8E8", // background lines
			},
			fontSize: {
				// heading 1
				"clamp-h1": "clamp(3.5rem, 0.4654rem + 9.8089vw, 8.3125rem)",
				56: ["3.5rem", { lineHeight: "1.1525" }],
				82: ["5.125rem", { lineHeight: "1.15976" }],
				133: ["8.3125rem", { lineHeight: "1.15973" }],

				// heading 2
				"clamp-h2": "clamp(3rem, 1.8965rem + 3.5669vw, 4.75rem)",
				32: ["3rem", { lineHeight: "1" }],
				48: ["3.5rem", { lineHeight: "1" }],
				76: ["4.75rem", { lineHeight: "1" }],

				// body1
				"clamp-body1": "clamp(1.375rem, 1.2174rem + 0.5096vw, 1.625rem)",
				22: ["1.375rem", { lineHeight: "162%" }],
				// 24:
				26: ["1.625rem", { lineHeight: "162%" }],

				// body2
				"clamp-body2": "clamp(1.25rem, 1.0924rem + 0.5096vw, 1.5rem)",
				20: ["1.25rem", { lineHeight: "162%" }],
				// 22:
				24: ["1.5rem", { lineHeight: "162%" }],

				// small
				"clamp-small": "clamp(1rem, 0.9212rem + 0.2548vw, 1.125rem)",
				16: ["1rem", { lineHeight: "195.5%" }],
				// 18:
				18: ["1.125rem", { lineHeight: "195.5%" }],

				// code
				"clamp-code": "clamp(0.125rem, 0.0102rem + 0.6122vw, 0.5rem)",
				8: ["0.502rem", { lineHeight: "2" }],

				// score
				"clamp-score": "clamp(1.96875rem, 0.7273rem + 4.0127vw, 3.9375rem)",
				31: ["1.96875rem", { lineHeight: "1" }],
				42: ["2.625rem", { lineHeight: "1" }],
				63: ["3.9375rem", { lineHeight: "1" }],

				// footer ascii
				"clamp-ascii": "clamp(1.6875rem, 0.6234rem + 3.4395vw, 3.375rem)",
				27: ["1.6875rem", { lineHeight: "162%" }],
				36: ["2.25rem", { lineHeight: "162%" }],
				54: ["3.375rem", { lineHeight: "162%" }],
			},
			borderRadius: {
				68: "4.25rem",
				914: "57.125rem",
			},
			blur: {
				60: "60px",
			},
			gridTemplateRows: {
				5: "repeat(5, minmax(0, 15rem))",
				7: "repeat(7, minmax(0, 12rem))",
				8: "repeat(8, minmax(0, 14.5rem))",
			},
			gridRowStart: {
				5: "5",
				6: "6",
				7: "7",
				8: "8",
			},
			animation: {
				"hi-there": "hi-there 2s ease infinite",
				"heart-beat": "heart-beat 2s infinite ease-in-out alternate",
				marque: "marque 10s linear infinite",
				float: "float 6s ease-in-out infinite",
				blob: 'blob 10s infinite',
				border: 'background ease infinite',
			},
			keyframes: {
				background: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				blob: {
				  '0%, 100%': {
					transform: 'translate(0, 0) scale(1)',
				  },
				  '25%': {
					transform: 'translate(20px, -50px) scale(1.1)',
				  },
				  '50%': {
					transform: 'translate(0, 20px) scale(1)',
				  },
				  '75%': {
					transform: 'translate(-20px, -15px) scale(0.9)',
				  },
				},
				
			  },
				"heart-beat": {
					from: { transform: "scale(0.8)" },
					to: { transform: "scale(1.2)" },
				},
				"hi-there": {
					"30%": { transform: "scale(1.2)" },
					"40%, 60%": { transform: "rotate(-20deg) scale(1.2)" },
					"50%": { transform: "rotate(20deg) scale(1.2)" },
					"70%": { transform: "rotate(0deg) scale(1.2)" },
					"100%": { transform: "scale(1)" },
				},
				marque: {
					"0%": { left: "0%" },
					"100%": { left: "-100%" },
				},
				float: {
					"0%, 100%": {
						transform: "translateY(0)",
					},
					"50%": {
						transform: "translateY(-1rem)",
					},
				},
			},
		},
	},
};