import styles from './action_card.module.css'

function ActionCard({ title, content, hoverText = "Explore", href = "#" }) {
    return (
        <div className={`${styles.card} card`}>
            <div className={styles.cardBody}>
                <p className={`${styles.cardTitle} title4`}>{title}</p>
                <p className={`${styles.cardContent} bodyRegular`}>{content}</p>
            </div>
            <a href={href} className={styles.cardSlider}>
                <p className={`${styles.cardSliderText} bodyLarge`}>{hoverText}</p>
            </a>
        </div>
    )
}

export default ActionCard