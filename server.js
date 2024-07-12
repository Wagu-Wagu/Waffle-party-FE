import express from "express";
import { createServer as createViteServer } from "vite";
import proxy from "express-http-proxy";

async function startServer() {
  const app = express();

  // Vite 개발 서버를 미들웨어로 설정
  const vite = await createViteServer({
    server: { middlewareMode: "html" },
  });
  app.use(vite.middlewares);

  // 프록시 설정
  app.use(
    "/api",
    proxy("https://team-wagu-prod.com", {
      proxyReqPathResolver: (req) => {
        return req.originalUrl.replace(/^\/api/, "");
      },
    }),
  );

  // 모든 경로를 Vite에 전달
  app.use("*", vite.middlewares);

  app.listen(5173, () => {
    console.log("Server is running on http://localhost:5173");
  });
}

startServer();
