import { Col, Row, Space } from "antd";
import React from "react";
import SummaryCard from "../../components/dashboard/SummaryCard";
import PreviewCard from "../../components/dashboard/PreviewCard";
import CustomerPreviewCard from "../../components/dashboard/PieChart";

const Dashboard: React.FC = () => {
  const bgStyle = {
    width: "100%",
    height: "100%",
    paddingLeft: "5%",
    paddingTop: "2%",
    // background: "#0092ff",
  };

  return (
    <div style={bgStyle}>
      <Row gutter={[32, 32]}>
        <SummaryCard
          title={"Invoice"}
          prefix={"This Month"}
          isLoading={false}
          tagContent={"100"}
        />
        <SummaryCard
          title={"Quote"}
          prefix={"This Month"}
          isLoading={false}
          tagContent={"100"}
        />
        <SummaryCard
          title={"Payment"}
          prefix={"This Month"}
          isLoading={false}
          tagContent={"100"}
        />
        <SummaryCard
          title={"Due Balance"}
          prefix={"Not Paid"}
          isLoading={false}
          tagContent={"100"}
        />
      </Row>
      <Row gutter={[32, 32]}>
        <Col
          className="gutter-row w-full"
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 18 }}
        >
          <Space> </Space>
          <div style={{ height: "100%", background: "white" }}>
            <Row className="pad20" gutter={[0, 0]}>
              <PreviewCard
                key={1}
                title={"Testing"}
                isLoading={false}
                entity={"Testing123"}
              />
              <PreviewCard
                key={1}
                title={"Development"}
                isLoading={false}
                entity={"Testing123"}
              />
              <PreviewCard
                key={1}
                title={"Production"}
                isLoading={false}
                entity={"Testing123"}
              />
            </Row>
          </div>
        </Col>

        <Col
          className="gutter-row w-full"
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 6 }}
        >
          <Space> </Space>
          <CustomerPreviewCard
            isLoading={false}
            activeCustomer={400}
            newCustomer={10}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
