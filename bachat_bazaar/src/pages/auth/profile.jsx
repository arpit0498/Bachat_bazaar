
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/product-context"
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-hot-toast";

const Profile = () => {
    const navigate = useNavigate()
    const { user, setUser } = useAuth()
    const { dispatch } = useProduct()
    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        toast.success(`${user.firstName} ${user.lastName} successfully!  Logged out`);
        dispatch({ type: "LOGOUT" })
        navigate("/logout")
        setUser("")
    }
    return (
        <div className="flex-c center profile-section">
            <h4 className="m2">Account</h4>
            <section className="profile-details flex-c">

                <div className="price-details">
                    <h6>Profile Details:</h6>
                    <div className="price-breakup">
                        <div>Full Name</div>
                        <div>{`${user.firstName} ${user.lastName}`}</div>
                    </div>
                    <div className="price-breakup">
                        <div>Email ID</div>
                        <div>{`${user.email}`}</div>
                    </div>
                    {/* <div className="price-breakup">
                        <div>Address</div>
                        <div>Lorem ipsum </div>
                    </div>
                    <div className="price-breakup">
                        <div>Contact</div>
                        <div>748741458</div>
                    </div> */}
                </div>

                <button onClick={logoutHandler} className="btn-logout btn btn-primary">Log out</button>
            </section>
        </div>

    )
}

export { Profile }