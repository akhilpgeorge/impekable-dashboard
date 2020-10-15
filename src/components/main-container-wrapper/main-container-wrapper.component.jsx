import React from 'react';

import Header from '../header/header.component';
import MainContainer from '../main-container/main-container.component';
import SideContainer from '../side-container/side-container.component';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './main-container-wrapper.styles.scss';

class MainContainerWrapper extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="main-container">
                    <div className="container-pane">
                        <h4 className="container first-heading">Overview
                        <Button className="add-fund-btn">
                                Add Funds
                                <span className="stripe plus-button"></span>
                            </Button>
                        </h4>
                    </div>

                    <Container>
                        <Row>
                            <MainContainer />
                            <SideContainer />
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}

export default MainContainerWrapper;
