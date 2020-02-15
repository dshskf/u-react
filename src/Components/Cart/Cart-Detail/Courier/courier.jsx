import React from 'react'
import { Courrier,PriceList } from './styles'

class Courier extends React.Component {
    render() {
        const { handler} = this.props
        return (
            <Courrier>
                <PriceList>
                    <span>Courier</span>
                    <select className="courier-name" onChange={handler}>
                        <option disabled selected="selected" value> -- Courier -- </option>
                        <option value="jne">JNE</option>
                        <option value="pos">POS </option>
                        <option value="tiki">TIKI</option>
                    </select>                
                </PriceList>
            </Courrier>
        )
    }
}

export default Courier