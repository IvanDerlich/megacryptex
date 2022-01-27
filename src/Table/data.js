import xrpLogo from '../assets/xrp_logo.png'
import btcLogo from '../assets/btc_logo.png'
import ethLogo from '../assets/eth_logo.png'
import bchLogo from '../assets/bch_logo.png'
import adaLogo from '../assets/ada_logo.png'
import dashLogo from '../assets/dash_logo.png'
import ltcLogo from '../assets/ltc_logo.png'

export const logos = {
    xrp: xrpLogo,
    btc: btcLogo,
    eth: ethLogo,
    bch: bchLogo,
    ada: adaLogo,
    dash: dashLogo,
    ltc: ltcLogo,
}
  
function createData( sell, quote, name, changeAbs, changeRel, buy, action) {
return { sell, quote, logo: logos[quote], name, changeAbs, changeRel, buy, action };
}
  
export const data = [
    createData(64743.0, 'btc', 'Bitcoin', 550.01, 0.86, 65364.4, 'sell'),
    createData(4568.9, 'eth', 'Ethereum', 31.6387, 0.70, 4660.8, 'buy'),
    createData(1.1693, 'xrp', 'XRP', 0.0014, 0.12  , 1.2018, null),
    createData(666.63, 'bch', 'Bitcoin Cash', 6.42, 0.97  , 683.66, 'buy'),
    createData(2.0045, 'ada', 'Cardano', -0.0039, -0.19  , 2.0655, null),
    createData(224.11, 'dash', 'Dash', 2.57, 1.16 , 231.01, 'sell'),
    createData(273.19, 'ltc', 'Litecoin', 2.97, 1.10 , 298.94, null),
];
