import React, { useState, useEffect } from 'react';
import { Col, Row } from 'reactstrap';
import { Bar } from 'react-chartjs-3';
import { Loading } from 'components';

const NoData = () => {
    return (
        <Row>
            <Col xs={12} className="text-center">
                <Row>
                    <Col sm={2} />
                    <Col xs={12} sm={8} className="text-center mt-4">
                        &nbsp;
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-center text-muted mt-5 mb-5">
                        <strong>no data available...</strong>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

function BarChart(props) {
    const { chartData, redraw, setRedraw } = props;
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoaded(true);
            setRedraw(false);
        };
        fetchData();
    }, []);

    return (
        <React.Fragment>
            {!loaded && <Loading />}
            {loaded && chartData.labels && <Bar data={chartData} redraw={redraw} legend={{ display: false }} />}
            {loaded && !chartData.labels && <NoData />}
        </React.Fragment>
    );
}

export default BarChart;