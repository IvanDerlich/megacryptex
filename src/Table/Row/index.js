import { sellStyles, buyStyles } from "./styles";

const Row = ({data}) => {
    const { action, sell, logo, quote, name, changeRel, changeAbs, buy } = data;
    return (
        <tr >
            <td className='transaction-cell sell-cell'>
            <div style={action == 'sell'? sellStyles : {}}>{sell}</div>
            </td>
            <td className='market-row'>
            <div className='logo-container'><img 
                src={logo} className='coin-logo'
            /></div>
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
