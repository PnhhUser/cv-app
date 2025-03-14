import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "localhost",
    port: 3000, // Giữ port cố định
    strictPort: true, // Tránh lỗi cổng bị chiếm dụng
    open: true, // Tự động mở trình duyệt
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"], // Load trước để tăng tốc
  },
  build: {
    target: "esnext",
    minify: "esbuild", // Sử dụng esbuild để build nhanh hơn
    sourcemap: false, // Tắt sourcemap nếu không debug
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Assets": path.resolve(__dirname, "src/assets"),
      "@Core": path.resolve(__dirname, "src/core"),
      "@Components": path.resolve(__dirname, "src/components"),
      "@Pages": path.resolve(__dirname, "src/pages"),
      "@Shared": path.resolve(__dirname, "src/shared"),
      "@Layouts": path.resolve(__dirname, "src/layouts"),
      "@Router": path.resolve(__dirname, "src/router"),
    },
  },
});
