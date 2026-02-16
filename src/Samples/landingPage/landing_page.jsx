import ActionButton from '../../Design system/Components/ActionButton/action_button.jsx'
import ActionCard from '../../Design system/Components/Card/Action Card/action_card.jsx'
import Card from '../../Design system/Components/Card/Card Basic/Card.jsx'
import Checkbox from '../../Design system/Components/Checkbox/checkbox.js'

function LandingPage() {
  return (
    <>
      <h1> is anyone there? </h1>
      <ActionButton style='primary' title="primary button!" function= {() => {console.log("Hello world!!")}} />
      <br></br>
      <ActionButton style='secondary' title="secondary button!" />
      <br></br>
      <ActionButton style='tertiary' title="tertiary button!" />
      <br></br>
      <ActionButton style='warning' title="warning button!" />
      <br></br>
      <ActionButton style='negative' title="negative button!" />
      <br></br>
      <ActionButton style='disabled' title="disabled button!" />
      <br></br>
      <ActionCard title='this is a card!' hoverText='that is not the correct Lorem ipsum'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</ActionCard>
      <Card width='200px'> this is also a card, but it's not that good on it's own</Card>
      <Card width='200px' height='200px'> this one actually has set height and width!</Card>
      <Checkbox>ai que não sei oque</Checkbox>
    </>
  )
}

export default LandingPage