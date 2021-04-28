import CheckoutCard from "../../components/cards/Checkout/CheckoutCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FailureCard from "../../components/cards/Failure/FailureCard";
import FilterCard from "../../components/cards/Filter/FilterCard";
import BaseNavbar from "../../components/navbar/Navbar";
import BaseTable from "../../components/table/Table";
import InfoCard from "../../components/cards/info/InfoCard";
import DownloadCard from "../../components/cards/download/DownloadCard";
import LicenseCard from "../../components/cards/License/LicenseCard";

function Dashboard() {
    return(
        <>
            <header className="mb-5">
                <BaseNavbar />
            </header>

            <Row>
                <Col md={8}>
                    <Row>
                        <Col md={3}>
                            <FilterCard />
                        </Col>

                        <Col md={4}>
                            <CheckoutCard amount="72" />
                        </Col>

                        <Col md={4}>
                            <FailureCard amount="10" />
                        </Col>

                        <Col md={11} className="mt-5">
                            <BaseTable />
                        </Col>            
                    </Row>
                </Col>

                <Col md={4}>
                    <div className="mb-5">
                        <LicenseCard />
                    </div>

                    <div className="mb-5">
                        <InfoCard discordName="antony#2142" />
                    </div>

                    <div className="mb-5">
                        <InfoCard email="anthony2142@email.com" />
                    </div>

                    <div className="mb-5">
                        <DownloadCard />
                    </div>
                </Col>
            </Row>           
        </>
    )
}

export default Dashboard;