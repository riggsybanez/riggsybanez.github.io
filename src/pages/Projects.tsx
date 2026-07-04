import { Card, Typography } from 'antd'
import * as styles from '../App.css.ts'

export default function MyProjects() {
    const { Paragraph } = Typography

    return (
        <Card className={styles.pageCard} title="Projects">
            <Paragraph className={styles.cardCopy}>
                Add project highlights, screenshots, or case studies here.
            </Paragraph>
        </Card>
    )
}