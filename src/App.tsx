import { ArrowRightOutlined, GithubOutlined, LayoutOutlined } from '@ant-design/icons'
import { Button, Card, Col, ConfigProvider, Divider, Layout, Row, Space, Typography } from 'antd'
import './App.css'

const { Header, Content, Footer } = Layout
const { Title, Paragraph, Text } = Typography

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
          borderRadius: 14,
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        },
      }}
    >
      <Layout className="app-shell">
        <Header className="app-header">
          <div className="brand">
            <LayoutOutlined />
            <span>riggsybanez</span>
          </div>
          <Button type="text" icon={<GithubOutlined />} href="https://github.com/riggsybanez">
            GitHub
          </Button>
        </Header>

        <Content className="app-content">
          <section className="hero">
            <div className="hero-copy">
              <Text className="eyebrow">React + TypeScript + Ant Design</Text>
              <Title level={1}>A polished starter for the site.</Title>
              <Paragraph>
                This project is set up with Vite, strict TypeScript, and Ant Design so you can
                build a clean portfolio or landing page without starting from scratch.
              </Paragraph>
              <Space wrap>
                <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                  Explore the UI
                </Button>
                <Button size="large">View source</Button>
              </Space>
            </div>

            <Card className="hero-card" bordered={false}>
              <Title level={4}>Included out of the box</Title>
              <Divider />
              <ul className="feature-list">
                <li>Fast Vite dev server and production builds</li>
                <li>TypeScript strict mode and React 19</li>
                <li>Ant Design components with theme tokens</li>
              </ul>
            </Card>
          </section>

          <Row gutter={[24, 24]} className="info-grid">
            <Col xs={24} md={8}>
              <Card title="Build" bordered={false}>
                <Paragraph>
                  Use <Text code>npm run build</Text> to create an optimized production bundle.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Development" bordered={false}>
                <Paragraph>
                  Use <Text code>npm run dev</Text> for local development with hot reload.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card title="Preview" bordered={false}>
                <Paragraph>
                  Use <Text code>npm run preview</Text> to review the production build locally.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Content>

        <Footer className="app-footer">Built with React, TypeScript, and Ant Design.</Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App