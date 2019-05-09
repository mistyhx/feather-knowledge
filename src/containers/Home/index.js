import React from "react";
import { Card, List, Icon } from "antd";
import "./index.less";

const { Meta } = Card;

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

function Home() {
  return (
    <div className="home">
      <h2>Trending Post</h2>
      <Card>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<IconText type="star-o" text="156" />]}>
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
        <a>View All</a>
      </Card>
      <div className="topics">
        <h2>Trending Topics</h2>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card
                cover={
                  <img alt="example" src="https://image.freepik.com/free-vector/blue-tree-illustration_1040-44.jpg" />
                }
                hoverable
              >
                <Meta title="topic" description="20 posts" />
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

export default Home;
