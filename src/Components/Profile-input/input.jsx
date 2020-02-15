import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { pullUser, pullEditData } from '../../Redux/User/user-selector';
import { ProfileField, InputButton, TextArea } from './styles';

export class ProfileInput extends Component {
    render() {
        const {
            labelName,
            inputType,
            inputName,
            checkType,
            updateData,
            changeLoc,
            passState
        } = this.props;
        return (
            <ProfileField>
                <label>{labelName}</label>
                {
                    checkType === '1' ?
                        (
                            <InputButton
                                type={inputType}
                                name={inputName}
                                spellCheck='false'
                                value={passState[inputName]}
                                onChange={updateData}
                                category={inputType}
                            />
                        )
                        :
                        checkType === '2' ?
                            (
                                <select name={inputName} className='profile-select' onChange={changeLoc}>
                                    {
                                        inputName === 'province' ?
                                            this.props.editData.province.map((location, index) => {
                                                return index === 0 ?
                                                    (
                                                        passState.province_id ?
                                                            (
                                                                <option key={index} value={
                                                                    passState.province_id + '_' +
                                                                    passState.province
                                                                } selected='selected'>
                                                                    {passState.province}
                                                                </option>
                                                            )
                                                            :
                                                            (
                                                                <React.Fragment>
                                                                    <option disabled selected value>-- Province --</option>
                                                                    <option key={index} value={
                                                                        location.province_id + '_' +
                                                                        location.province}>
                                                                        {location.province}
                                                                    </option>
                                                                </React.Fragment>
                                                            )
                                                    )
                                                    :
                                                    (
                                                        <option key={index} value={
                                                            location.province_id + '_' +
                                                            location.province
                                                        }>
                                                            {location.province}
                                                        </option>
                                                    );
                                            })
                                            :
                                            this.props.editData.city.map((location, index) => {
                                                if (location.province_id === passState.province_id) {
                                                    return index + 1 === parseInt(passState.city_id) ?
                                                        (
                                                            <option key={index} value={
                                                                location.city_id + '_' +
                                                                location.city_name
                                                            }
                                                                selected='selected'>
                                                                {location.city_name}
                                                            </option>
                                                        )
                                                        :
                                                        (
                                                            <option key={index} value={
                                                                location.city_id + '_' +
                                                                location.city_name
                                                            }>
                                                                {location.city_name}
                                                            </option>
                                                        );
                                                }
                                            })
                                    }
                                </select>
                            )
                            :
                            (
                                <TextArea
                                    name={inputName}
                                    spellCheck='false'
                                    autocorrect='off'
                                    value={passState.address}
                                    onChange={updateData}
                                />
                            )
                }
            </ProfileField>
        );
    }
}

const stateProps = createStructuredSelector({
    user: pullUser,
    editData: pullEditData
});

export default connect(stateProps)(ProfileInput);
