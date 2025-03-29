import Banner from "../../Components/Banner/Banner";
import OrderProcedure from "../../Components/OrderProcedure/OrderProcedure";
import PaymentTerms from "../../Components/PaymentTerms/PaymentTerms";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OrderProcedure></OrderProcedure>
            <PaymentTerms></PaymentTerms>
        </div>
    );
};

export default Home;