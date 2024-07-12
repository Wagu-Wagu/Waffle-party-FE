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
        // 요청 경로에서 '/api'를 제거하고 프록시할 주소를 만듭니다.
        return req.originalUrl;
      },
      // 프록시 서버에서 CORS 문제를 해결하기 위해 필요한 옵션
      proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
        proxyReqOpts.headers["Origin"] = srcReq.headers.origin;
        return proxyReqOpts;
      },
    }),
  );

  // 모든 경로를 Vite에 전달
  app.use("*", vite.middlewares);

  let process;

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

startServer();
