import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";
import eslint from "vite-plugin-eslint";

export default defineConfig({
	plugins: [
		eslint(),
		react(),
		viteCompression({ algorithm: "brotliCompress" }),
		viteCompression({ algorithm: "gzip" }),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "src/__tests__/setupTest.js",
	},
});
