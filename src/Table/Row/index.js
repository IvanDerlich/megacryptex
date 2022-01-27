import { sellStyles, buyStyles } from "./styles";
import './styles.css'

const Row = ({data, setSelectionQuote, selectionQuote, logos}) => {
    const { action, sell, logo, quote, name, changeRel, changeAbs, buy } = data;
    const selected = selectionQuote === quote
    return (
        <tr className={selected ? 'selected-row': ''} onClick={()=> setSelectionQuote(quote)}>
            <td className='transaction-cell sell-cell'>
            <div style={action == 'sell'? sellStyles : {}}>{sell}</div>
            </td>
            <td className='market-row'>
            <div className='logo-container'>
                <img src={logo} className='coin-logo'/>
            </div>
            <div className='market-row-right'>
                <div className='cell-quote'>{quote}</div>
                <div className='cell-name'>{name}</div>
            </div>
            </td>
            <td className={`change-cell ${changeRel < 0 ? 'negative-change':''}`}>
            <div>{changeAbs}</div>
            <div>
                {`${changeRel < 0 ? '\u25BE' : '\u25B4' } (${changeRel}%)`}
            </div>
            </td>
            <td className='transaction-cell'>
            <div style={action == 'buy'? buyStyles : {}}>{buy}</div>
            </td>
        </tr>
    )
}

export default Row;
