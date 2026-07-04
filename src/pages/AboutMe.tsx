import { Card, Typography } from 'antd'
import * as styles from '../App.css.ts'

export default function AboutMe() {
    const { Paragraph } = Typography

    return (
        <Card className={styles.pageCard} bordered={false} title="About Me">
            <Paragraph className={styles.cardCopy}>
                Add a short bio, skills, and links to your social profiles here.
            </Paragraph>
        </Card>
    )
}