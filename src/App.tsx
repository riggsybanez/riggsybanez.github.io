import { LayoutOutlined } from '@ant-design/icons'
import { Card, Layout, Menu, Typography } from 'antd'
import * as styles from './App.css.ts'
import Home from './pages/Home'
import MyProjects from './pages/Projects.tsx'
import AboutMe from './pages/AboutMe.tsx'

const { Header, Content, Footer } = Layout

const menuItems = [
  {
    key: 'menu',
    label: 'Menu',
  },
  {
    key: 'projects',
    label: 'Projects',
  },
  {
    key: 'about-me',
    label: 'About Me',
  },
]

function App() {
  return (
    <Layout className={styles.shell}>
      <Header className={`${styles.header} ${styles.mobileHeader}`}>
        <div className={`${styles.brand} ${styles.mobileBrand}`}>
          <LayoutOutlined />
          <span>riggsybanez</span>
        </div>
        <Menu
          className={`${styles.menu} ${styles.mobileMenu}`}
          mode="horizontal"
          items={menuItems}
          selectedKeys={['menu']}
        />
      </Header>

      <Content className={`${styles.content} ${styles.mobileContent}`}>
        <section id="menu" className={styles.pagePanel}>
          <Home />
        </section>

        <section id="projects" className={styles.sectionGap}>
          <MyProjects />
        </section>

        <section id="about-me" className={styles.sectionGap}>
          <AboutMe />
        </section>
      </Content>

      <Footer className={styles.footer}>Built with React, TypeScript, and Ant Design.</Footer>
    </Layout>
  )
}

export default App