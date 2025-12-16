import ActionButton from '../../Design system/Components/ActionButton/action_button.jsx'

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
    </>
  )
}

export default LandingPage