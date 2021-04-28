import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Nav';
import './NotificationCard.css';

function NotificationCard() {
    return(
        <div id="notification-card">
            <h4 className="mb-3">Notifications</h4>

            <Row>
                <Col md={2} className="offset-1">
                    <svg className="mr-2 mt-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="16" cy="16" r="16" fill="#1EC1C3"/>
                        <path d="M16 6C10.4858 6 6 10.4858 6 16C6 21.5142 10.4858 26 16 26C21.5142 26 26 21.5142 26 16C26 10.4858 21.5142 6 16 6ZM21.0684 13.8809L15.6516 19.2974C15.4891 19.4599 15.2758 19.5417 15.0625 19.5417C14.8492 19.5417 14.6359 19.4599 14.4734 19.2974L11.7651 16.5891C11.4391 16.2634 11.4391 15.7366 11.7651 15.4109C12.0909 15.0849 12.6174 15.0849 12.9434 15.4109L15.0625 17.53L19.8901 12.7026C20.2159 12.3766 20.7424 12.3766 21.0684 12.7026C21.3941 13.0284 21.3941 13.5549 21.0684 13.8809Z" fill="#1EC1C3"/>
                    </svg>
                </Col>
                
                <Col md={10} style={{flexDirection: 'column'}}>
                    <p className="mb-0"><span className="font-weight-bold">Transfer link confirmed</span> <span className="text-muted">by</span><span className="text-muted d-block">jamesconor@email.com</span></p>
                    <small className="text-muted d-block">just now</small>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col md={2} className="offset-1">
                    <svg className="mr-2 mt-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="16" cy="16" r="16" fill="#1EC1C3"/>
                        <path d="M16 6C10.4858 6 6 10.4858 6 16C6 21.5142 10.4858 26 16 26C21.5142 26 26 21.5142 26 16C26 10.4858 21.5142 6 16 6ZM21.0684 13.8809L15.6516 19.2974C15.4891 19.4599 15.2758 19.5417 15.0625 19.5417C14.8492 19.5417 14.6359 19.4599 14.4734 19.2974L11.7651 16.5891C11.4391 16.2634 11.4391 15.7366 11.7651 15.4109C12.0909 15.0849 12.6174 15.0849 12.9434 15.4109L15.0625 17.53L19.8901 12.7026C20.2159 12.3766 20.7424 12.3766 21.0684 12.7026C21.3941 13.0284 21.3941 13.5549 21.0684 13.8809Z" fill="#1EC1C3"/>
                    </svg>
                </Col>
                
                <Col md={10} style={{flexDirection: 'column'}}>
                    <p className="mb-0"><span className="font-weight-bold">Transfer link confirmed</span> <span className="text-muted">by</span><span className="text-muted d-block">anthony2142@email.com</span></p>
                    <small className="text-muted d-block">2 min ago</small>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col md={2} className="offset-1 border-0">
                    <svg className="mr-2 mt-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.2" cx="16" cy="16" r="16" fill="#FCBC23"/>
                        <path d="M6.69178 9.46438L13.5558 15.0487C13.5786 15.0674 13.6034 15.0837 13.6294 15.0967C13.721 15.1435 13.8178 15.1671 13.9179 15.1671C14.0237 15.1671 14.1295 15.1394 14.2841 15.0458L21.1429 9.46477C21.2446 9.38215 21.3012 9.25684 21.2963 9.12621C21.2914 8.99559 21.2255 8.87473 21.118 8.79988C20.8369 8.60375 20.5077 8.5 20.1671 8.5H7.66713C7.32654 8.5 6.99779 8.60336 6.71662 8.79949C6.6092 8.87395 6.54326 8.9948 6.53838 9.12582C6.5335 9.25645 6.59006 9.38176 6.69178 9.46438Z" fill="#FCBC23"/>
                        <path d="M16 18.9164C16 15.9297 18.43 13.4997 21.4167 13.4997C21.647 13.4997 21.8334 13.3133 21.8334 13.083V10.8528C21.8334 10.6921 21.741 10.5456 21.5957 10.4765C21.4505 10.4089 21.2787 10.4288 21.1538 10.5298L14.761 15.732L14.6877 15.7804C14.2072 16.0754 13.6168 16.0905 13.0744 15.7324L6.67953 10.5293C6.55543 10.428 6.38371 10.4076 6.23762 10.476C6.09238 10.5452 6 10.6917 6 10.8524V18.4997C6 19.4189 6.74746 20.1664 7.66668 20.1664H15.6497C15.7705 20.1664 15.8853 20.1139 15.9646 20.0228C16.0436 19.9316 16.0794 19.8103 16.0623 19.6907C16.0199 19.3945 16 19.1483 16 18.9164Z" fill="#FCBC23"/>
                        <path d="M21.4163 14.3335C18.8891 14.3335 16.833 16.3896 16.833 18.9168C16.833 21.4441 18.8891 23.5002 21.4163 23.5002C23.9436 23.5002 25.9996 21.4441 25.9996 18.9169C25.9996 16.3896 23.9436 14.3335 21.4163 14.3335ZM23.3776 18.3781C23.2962 18.4595 23.1896 18.5002 23.083 18.5002C22.9764 18.5002 22.8698 18.4595 22.7884 18.3781L21.833 17.4227V21.4169C21.833 21.6472 21.6466 21.8335 21.4163 21.8335C21.186 21.8335 20.9996 21.6472 20.9996 21.4169V17.4227L20.0443 18.3781C19.8815 18.5409 19.6178 18.5409 19.4551 18.3781C19.2923 18.2153 19.2923 17.9517 19.4551 17.7889L21.1212 16.1228C21.1598 16.0841 21.206 16.0534 21.2573 16.0322C21.3591 15.9901 21.4736 15.9901 21.5755 16.0322C21.6268 16.0534 21.6729 16.0841 21.7115 16.1228L23.3777 17.7889C23.5404 17.9517 23.5404 18.2153 23.3776 18.3781Z" fill="#FCBC23"/>
                    </svg>
                </Col>
                
                <Col md={10} className="border-0" style={{flexDirection: 'column'}}>
                    <p className="mb-0"><span className="font-weight-bold">Confirmation email sent</span> <span className="text-muted">to</span><span className="text-muted d-block">anthony2142@email.com and</span><span className="text-muted d-block">jamesconor@email.com</span></p>
                    <small className="text-muted d-block">5 min ago</small>
                </Col>
            </Row>
        </div>
    )
}

export default NotificationCard;