import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import ProfilePic from '../../images/profilePic.png';
import './Navbar.css';
import NotificationCard from '../cards/notification/NotificationCard';

function BaseNavbar() {
    return(
        <Nav>
            <NavDropdown 
                title={
                    <Row style={{alignItems: 'center'}}>
                        <Col className="mr-3">
                            <img src={ProfilePic} alt="profile pic"/>
                        </Col>
                        <Col style={{flexDirection: 'column'}}>
                            <h6 className="mb-0">Anthony Mike</h6>
                            <small>anthony2142@email.com</small>
                        </Col>

                        <Col className="ml-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 13.75L3.75 7.5L4.625 6.625L10 12L15.375 6.625L16.25 7.5L10 13.75Z" fill="white"/>
                            </svg>
                        </Col>
                    </Row>
                } 
                id="nav-dropdown">
                <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>

            <Dropdown className="dropdown-notification mr-4 mt-2">
                <Dropdown.Toggle id="dropdown-basic">
                    <div className="notification">
                        <svg className="light" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="6" fill="#FE7448"/>
                        </svg>

                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5961 14.411C17.0758 13.6346 16.3639 12.5715 16.3639 9.54546V8.18182C16.3639 5.30489 14.4434 2.87088 11.8184 2.08624V1.8182C11.8184 0.815413 11.0025 0 10.0002 0C8.99791 0 8.18203 0.815413 8.18203 1.8182V2.08624C5.55707 2.87088 3.63656 5.30489 3.63656 8.18182V9.54546C3.63656 12.5715 2.92457 13.6346 2.4043 14.411C2.10332 14.8606 1.81836 15.2854 1.81836 15.9091C1.81836 17.391 4.90764 17.911 7.4123 18.0901C7.76348 19.2144 8.79434 20 10.0002 20C11.206 20 12.2369 19.2144 12.5881 18.0901C15.0927 17.911 18.182 17.391 18.182 15.9091C18.1821 15.2854 17.897 14.8606 17.5961 14.411ZM10.9093 1.89081C10.6116 1.84794 10.3096 1.8182 10.0002 1.8182C9.69081 1.8182 9.38889 1.84794 9.09115 1.89081V1.8182C9.09115 1.31706 9.49866 0.90912 10.0002 0.90912C10.5018 0.90912 10.9093 1.31702 10.9093 1.8182V1.89081Z" fill="#6F7291"/>
                        </svg>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <NotificationCard />
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    )
}

export default BaseNavbar;