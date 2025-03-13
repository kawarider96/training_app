import { Routes, Route, Link } from "react-router-dom";
import { Box } from "@mui/material";
import ReactMemoExample from "./pages/reactMemoExample/ReactMemoExample";
import { UseMemoExample } from "./pages/useMemoExample/UseMemoExample";
import { UseCallbackExample } from "./pages/useCallbackExample/UseCallbackExample";
import { ReactLazyLoading } from "./pages/reactLazyLoading/ReactLazyLoading";

export default function App() {
  return (
    <div>
      <Box sx={{display:'flex', gap:'10px', p:3}}>
        <Link to="/">React Memo Example</Link>
        <Link to="/use-memo-example">Use Memo Example</Link>
        <Link to="/use-callback-example">Use Callback Example</Link>
        <Link to="/lazy-loading-example">Lazy Loading Example</Link>
      </Box>

      <Routes>
        <Route path="/" element={<ReactMemoExample />} />
        <Route path="/use-callback-example" element={<UseCallbackExample />} />
        <Route path="/use-memo-example" element={<UseMemoExample />} />
        <Route path="/lazy-loading-example" element={<ReactLazyLoading/>}/>
      </Routes>
    </div>
  );
}
