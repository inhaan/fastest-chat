import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Main = lazy(() => import("./page/Main"));
const Chat = lazy(() => import("./page/Chat"));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:roomId" element={<Chat />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
