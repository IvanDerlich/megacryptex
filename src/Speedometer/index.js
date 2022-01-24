import styles from'./styles.js';
import ReactSpeedometer from "react-d3-speedometer"

function Speedometer() {
  return (
    <section style={styles}>
      <ReactSpeedometer 
        value={50} 
        maxValue={100} 
        width={window.innerWidth*0.95}
        needleHeightRatio={0.6}
        ringWidth={50}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'black'}
        textColor={'black'}
        customSegmentStops={[0, 100* 1/7, 100*2/7, 100*3/7, 100*4/7,100*5/7,100*6/7,100*7/7]}
        customSegmentLabels={[
          {
            text: 'Label1',
            position: 'OUTSIDE',
          },{
            text: 'Label2',
            position: 'OUTSIDE',
          },{
            text: 'Label3',
            position: 'OUTSIDE',
          },{
            text: 'Label4',
            position: 'OUTSIDE',
          },{
            text: 'Label5',
            position: 'OUTSIDE',
          },{
            text: 'Label6',
            position: 'OUTSIDE',
          },{
            text: 'Label7',
            position: 'OUTSIDE',
          }
        ]}
      />
    </section>
  );
}

export default Speedometer;