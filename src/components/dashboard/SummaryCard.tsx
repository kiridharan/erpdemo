import { Tag, Divider, Row, Col, Spin, Tooltip, Card } from "antd";
import React from "react";

interface SummaryCardProps {
  title: string;
  tagContent: string;
  prefix: string;
  isLoading: boolean;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  isLoading = false,
  title,
  prefix,
  tagContent,
}) => {
  return (
    <Col
      className="gutter-row"
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 6 }}
    >
      <Card
        hoverable
        style={{
          background: "white",
          color: "#606262",
          fontSize: 13,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          textAlign: "center", // Center align text and tag
          boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.3)",
        }}
      >
        <div className="pad15 strong">
          <h3
            style={{
              color: "#22075e",
              fontSize: "large",
              margin: "5px 0",
              textTransform: "capitalize",
            }}
          >
            {title}
          </h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }} />
        <div className="pad15">
          <Row gutter={[0, 0]} justify="space-between" wrap={false}>
            <Col className="gutter-row" flex="auto">
              <div
                className="left"
                style={{ whiteSpace: "nowrap", margin: "0 auto" }}
              >
                {prefix}
              </div>
            </Col>
            <Divider type="vertical" style={{ margin: "0 8px" }} />
            <Col className="gutter-row" flex="auto">
              {isLoading ? (
                <Spin />
              ) : (
                <Tooltip title={tagContent}>
                  <Tag
                    color={"green"}
                    style={{
                      maxWidth: "110px",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      margin: "0 auto", // Center tag
                    }}
                  >
                    {tagContent}
                  </Tag>
                </Tooltip>
              )}
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  );
};

export default SummaryCard;
