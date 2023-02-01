import { defineConfig } from "vite"
import { viteSingleFile } from "vite-plugin-singlefile"
import vue from "@vitejs/plugin-vue"
import path from "path"


export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
		target: "esnext",
		assetsInlineLimit: 100000000,
		chunkSizeWarningLimit: 100000000,
		cssCodeSplit: false,
		brotliSize: false,
    emptyOutDir: false,
		rollupOptions: {
			inlineDynamicImports: true,
			output: {
				manualChunks: () => "everything.js",
			},
      input: {
        index: path.resolve(__dirname, "src/ui/ui.html"),
      },
		},
	},
})
