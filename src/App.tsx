import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import URLScrapper from "./Pages/URLScrapper";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route path="url-scrap" element={<URLScrapper />} />
        </Route>
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
