import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

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
});
