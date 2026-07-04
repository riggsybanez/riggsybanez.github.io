import { Typography } from 'antd'
import * as styles from '../App.css.ts'

export default function Home() {
    const { Title, Paragraph, Text } = Typography

    return (
        <>
            <Text className={styles.eyebrow}>Homepage</Text>
            <Title level={1}>A base skeletal homepage.</Title>
            <Paragraph>
                This is a simple starter layout with Ant Design components and a top navigation menu.
                Use the sections below as anchors for future content.
            </Paragraph>
        </>
    )
}

