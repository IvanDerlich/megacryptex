import {styles, commonStyles} from'./styles.js';
import ReactSpeedometer from "react-d3-speedometer"
const percentage = -26

function Speedometer() {
  return (
    <section style={styles}>
      <div style={{height: window.innerWidth*0.5, width: '100%'}}>
        <ReactSpeedometer 
          value={20} 
          maxValue={100} 
          width={window.innerWidth*0.95}
          currentValueText=' '
          needleHeightRatio={0.6}
          minValue={0}
          maxValue={100}
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
      </div>  
      <p style={{...commonStyles, fontSize:'50px'}}>{percentage}</p>
      <span style={{...commonStyles, textTransform: 'uppercase'}}>Unsustainable</span>
      
    </section>
  );
}

export default Speedometer;