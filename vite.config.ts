import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import compression from "vite-plugin-compression2";

export default defineConfig({
  plugins: [
    // compression({
    //   include: /\.(js|css|svg)$/i,
    //   algorithm: "gzip",
    // }),
    react(),
    svgr({
      svgrOptions: {
        // svgr options
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://team-wagu-prod.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://team-wagu-dev.com",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       headers: {
  //         "Access-Control-Allow-Origin": "*", // 필요에 따라 허용할 Origin을 명시해 줄 수도 있습니다.
  //         "Access-Control-Allow-Methods":
  //           "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  //         "Access-Control-Allow-Headers":
  //           "X-Requested-With, Content-Type, Authorization",
  //       },
  //       // 추가적으로 필요한 설정이 있다면 여기에 작성합니다.
  //     },
  //   },
  // },
});
