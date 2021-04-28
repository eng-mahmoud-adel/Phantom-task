import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BaseButton from '../../button/Button';
import './DownloadCard.css';

function DownloadCard() {
    return(
        <Card className="download-card text-white">
            <Row style={{alignItems: 'center'}}>
                <Col md={4} className="desktop">
                    <svg width="100" height="58" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="13.8662" y="3.81226" width="72.1563" height="47.8148" stroke="white" strokeOpacity="0.6" strokeWidth="0.5"/>
                        <path d="M59 30V34C59 34.5304 58.7893 35.0391 58.4142 35.4142C58.0391 35.7893 57.5304 36 57 36H43C42.4696 36 41.9609 35.7893 41.5858 35.4142C41.2107 35.0391 41 34.5304 41 34V30" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M45 25L50 30L55 25" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M50 30V18" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        <rect x="10.5181" y="0.25" width="79.0759" height="55.0509" rx="2.75" stroke="white" strokeOpacity="0.6" strokeWidth="0.5"/>
                        <rect x="0.25" y="55.9121" width="99.5" height="1.83781" rx="0.918907" stroke="white" strokeOpacity="0.6" strokeWidth="0.5"/>
                        <path d="M34.3714 56.3749C34.1611 56.2385 34.2576 55.9121 34.5082 55.9121H65.1521C65.4445 55.9121 65.5464 56.3004 65.2917 56.4439C64.8087 56.7162 64.2636 56.8593 63.7091 56.8593H36.0091C35.4279 56.8593 34.8591 56.6911 34.3714 56.3749Z" stroke="white" strokeOpacity="0.6" strokeWidth="0.5"/>
                    </svg>

                    <p className="pt-3">Desktop App</p>
                </Col>

                <Col md={8}>
                    <div className="mb-3">
                        <BaseButton 
                            text="Download for MacOS" 
                            leftIcon={
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                    <path d="M15.6168 19.2C14.5328 20.252 13.3368 20.088 12.1968 19.592C10.9848 19.086 9.8768 19.054 8.5968 19.592C7.0028 20.28 6.1568 20.08 5.1968 19.2C-0.223203 13.62 0.576797 5.12002 6.7368 4.80002C8.2308 4.88002 9.2768 5.62602 10.1568 5.68801C11.4648 5.42202 12.7168 4.66002 14.1168 4.76002C15.7988 4.89602 17.0568 5.56002 17.8968 6.75401C14.4368 8.83401 15.2568 13.394 18.4348 14.674C17.7988 16.344 16.9828 17.994 15.6148 19.214L15.6168 19.2ZM10.0368 4.74002C9.8748 2.26002 11.8848 0.220019 14.1968 0.0200195C14.5148 2.88002 11.5968 5.02002 10.0368 4.74002Z" fill="#19A2A4"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            } 
                        />
                    </div>

                    <div>
                        <BaseButton 
                            text="Download for Windows"
                            leftIcon={
                                <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.81864L8.11068 1.71405L8.11423 9.53746L0.00740909 9.58362L0 2.81864ZM8.10682 10.4389L8.11311 18.2691L0.00629545 17.1545L0.00584091 10.3863L8.10682 10.4389ZM9.09002 1.56955L19.8441 0V9.43795L9.09002 9.52333V1.56955ZM19.8466 10.5125L19.8441 19.908L9.09 18.3901L9.07493 10.4949L19.8466 10.5125Z" fill="#19A2A4"/>
                                </svg>
                            } 
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    )
}

export default DownloadCard;