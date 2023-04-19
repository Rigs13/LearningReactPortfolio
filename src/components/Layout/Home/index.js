import { Link } from "react-router-dom";
import'./index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src='/logo-s.png' alt="developer" />
                emisi
                <br />
                Computer Science Student
                </h1>
                <h2>Full Stack Developer in Training / Python and Java / Some Web Development</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>

        </div>
    );
}

export default Home