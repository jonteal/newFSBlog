// import Sidebar from "../../Sidebar/Sidebar";
import "./Home.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
    return (
        <>
        <Header />
        <div className="home">
            {/* <Posts /> */}
            <Sidebar />
        </div>
        </>
    );
};

export default Home;