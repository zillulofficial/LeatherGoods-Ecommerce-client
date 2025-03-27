import Banner from "../../Components/Banner/Banner";
import OrderProcedure from "../../Components/OrderProcedure/OrderProcedure";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OrderProcedure></OrderProcedure>
        </div>
    );
};

export default Home;