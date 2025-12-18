import styles from './action_card.module.css'
import Card from '../Card Basic/Card.jsx'

function ActionCard(props) {
    let title = props.title
    let hoverText = props.hoverText
    let href = props.href
    return (
        <Card className={styles.card}>
            <div className={styles.cardBody}>
                <p className={`${styles.cardTitle} title4`}>{title}</p>
                <p className={`${styles.cardContent} bodyRegular`}>{props.children}</p>
            </div>
            <a href={href} className={styles.cardSlider}>
                <p className={`${styles.cardSliderText} bodyLarge`}>{hoverText}</p>
            </a>
        </Card>
    )
}

export default ActionCard