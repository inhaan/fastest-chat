import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./page/Main";
import { Chat } from "./page/Chat";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:roomId" element={<Chat />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
