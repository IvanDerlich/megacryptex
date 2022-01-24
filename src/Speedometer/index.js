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
        ringWidth={100}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={'black'}
        textColor={'black'}
        customSegmentStops={[0, 100* 1/7, 100*2/7, 100*3/7, 100*4/7,100*5/7,100*6/7,100*7/7]}
        customSegmentLabels={[
          {
            text: 'Label1',
            textAlign: 'top'       
          },{
            text: 'Label2',
          },{
            text: 'Label3',
          },{
            text: 'Label4',
          },{
            text: 'Label5',
          },{
            text: 'Label6',
          },{
            text: 'Label7',
          }
        ]}
      />
    </section>
  );
}

export default Speedometer;