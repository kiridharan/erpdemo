import { Statistic, Progress, Divider, Row, Spin } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

export default function CustomerPreviewCard({
  isLoading = false,
  activeCustomer = 0,
  newCustomer = 0,
}) {
  return (
    <Row className="gutter-row">
      <div style={{ height: "550px", width: "100%", background: "white" }}>
        <div
          style={{
            textAlign: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h3
            style={{
              color: "#22075e",
              marginBottom: 40,
              marginTop: 15,
              fontSize: "large",
            }}
          >
            Customer Preview
          </h3>

          {isLoading ? (
            <Spin />
          ) : (
            <div
              style={{
                display: "grid",
                justifyContent: "center",
              }}
            >
              <Progress type="dashboard" percent={newCustomer} size={148} />
              <p>New Customer this Month"</p>
              <Divider />
              <Statistic
                title={"Active Customer"}
                value={activeCustomer}
                precision={2}
                valueStyle={
                  activeCustomer > 0
                    ? { color: "#3f8600" }
                    : activeCustomer < 0
                    ? { color: "#cf1322" }
                    : { color: "#000000" }
                }
                prefix={
                  activeCustomer > 0 ? (
                    <ArrowUpOutlined />
                  ) : activeCustomer < 0 ? (
                    <ArrowDownOutlined />
                  ) : null
                }
                suffix="%"
              />
            </div>
          )}
        </div>
      </div>
    </Row>
  );
}
