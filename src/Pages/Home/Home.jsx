import Banner from "../../Components/Banner/Banner";
import LeatherCollection from "../../Components/LeatherCollection/LeatherCollection";
import OrderProcedure from "../../Components/OrderProcedure/OrderProcedure";
import PaymentTerms from "../../Components/PaymentTerms/PaymentTerms";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LeatherCollection></LeatherCollection>
            <Services></Services>
            <OrderProcedure></OrderProcedure>
            <PaymentTerms></PaymentTerms>
        </div>
    );
};

export default Home;