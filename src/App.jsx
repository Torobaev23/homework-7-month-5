import './App.css';
import PostsPage from "./pages/PostsPage.jsx";
import {Routes, Route} from "react-router-dom";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import Layout from "./components/Layout.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="posts" element={<PostsPage/>}/>
                    <Route path=":id" element={<SinglePostPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
