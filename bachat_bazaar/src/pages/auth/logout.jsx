import "./Logout.css";
import { Link } from "react-router-dom";

const Logout = () => {
    document.title = "Logout | Bachat Bazaar";

    return (
        <div className="page-wrapper">
            <section className="logout-container">
                <div className="logout-inner-container">
                    <div className="checked-icon">
                        <i class="fa-solid fa-circle-check fa-xl"></i>
                    </div>
                    <div className="logout-card-content">
                        You have been successfully logged out!
                    </div>
                    <Link to="/">
                        <div className="logout-card-action">
                            <div className="back-to-home-icon">

                            </div>
                            <div className="back-action-name">Back to Home</div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export { Logout };