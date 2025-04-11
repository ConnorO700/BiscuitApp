import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	console.log("Starting on " + mode)
	if (mode === 'Development') {
		return {
			envPrefix: 'APP_',
			build: {
				outDir: 'C:/IIS Sites/BiscuitSite/Frontend',
				emptyOutDir: true,
			},
			plugins: [
				react({
					babel: {
						plugins: [["babel-plugin-react-compiler"]]
					}
				}),
				tailwindcss(),
			],
			server: {
				port: 3333,
			},
		}
	};

	if (mode === 'Production') {
		return {
			envPrefix: 'APP_',
			build: {
				outDir: 'C:/Prod/BiscuitApp/Frontend',
				emptyOutDir: true,
			},
			plugins: [
				react({
					babel: {
						plugins: [["babel-plugin-react-compiler"]]
					}
				}),
				tailwindcss(),
			],
			server: {
				port: 3330,
			},
		}
	}
});
