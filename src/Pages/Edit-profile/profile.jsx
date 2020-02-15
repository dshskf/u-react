import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { pullUser, pullEditData, pullError } from '../../Redux/User/user-selector'
import { get_user_start, post_update_start } from '../../Redux/User/user-action'
import ProfileInput from '../../Components/Profile-input/input'
import ErrorBox from '../../Components/Error-box/error'
import { ProfileContainer, SubmitButton } from './styles'
import ProgressBar from '../../Components/Progress-bar/bar'

export class EditProfilePage extends Component {
    state = {
        setDefault: false,
        boolSubmit: false,
        username: null,
        email: null,
        phone: null,
        province_id: null,
        province: null,
        city_id: null,
        city: null,
        address: null
    }

    componentDidMount() {
        const { get_user_start, user } = this.props
        get_user_start(user.id)
    }


    selectedLocation = e => {
        const { name, value } = e.target
        const { editData } = this.props
        let tempCity = []

        editData.city.map((location, index) => {
            if (location.province_id === value.split("_")[0]) {
                tempCity.push(location.city_id + "_" + location.city_name)
            }
        })

        name === "province" ?
            this.setState({
                province_id: value.split("_")[0],
                province: value.split("_")[1],
                city_id: tempCity[0].split("_")[0],
                city: tempCity[0].split("_")[1]
            })
            :
            this.setState({ city_id: value.split("_")[0], city: value.split("_")[1] })
    }

    postUserUpdate = () => {
        const { post_update_start, user } = this.props
        const dataToParse = {
            userId: user.id,
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone,
            province_id: this.state.province_id,
            province: this.state.province,
            city_id: this.state.city_id,
            city: this.state.city,
            address: this.state.address
        }

        this.setState({
            boolSubmit: true
        })

        post_update_start(dataToParse)
    }

    editHandler = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {

        return (
            this.props.editData ?
                <ProfileContainer>
                    {
                        this.state.setDefault ?
                            null
                            :
                            this.setState({
                                setDefault: true,
                                username: this.props.editData.user.username,
                                email: this.props.editData.user.email,
                                phone: this.props.editData.user.phone,
                                address: this.props.editData.user.address,
                                province_id: this.props.editData.user.province_id,
                                province: this.props.editData.user.province,
                                city_id: this.props.editData.user.city_id,
                                city: this.props.editData.user.city
                            })
                    }
                    {
                        this.props.errData ?
                            <ErrorBox errMsg={this.props.errData.msg} />
                            :
                            null
                    }
                    <ProfileInput labelName="Username" inputType="text" inputName="username" checkType="1" updateData={this.editHandler} passState={this.state} />
                    <ProfileInput labelName="Email" inputType="email" inputName="email" checkType="1" updateData={this.editHandler} passState={this.state} />
                    <ProfileInput labelName="Phone" inputType="tel" inputName="phone" checkType="1" updateData={this.editHandler} passState={this.state} />
                    <ProfileInput labelName="Province" inputName="province" checkType="2" changeLoc={this.selectedLocation} passState={this.state} />
                    <ProfileInput labelName="City" inputName="city" checkType="2" changeLoc={this.selectedLocation} passState={this.state} />
                    <ProfileInput labelName="Address" inputName="address" checkType="3" updateData={this.editHandler} passState={this.state} />
                    <SubmitButton type="submit" value="UPDATE" onClick={this.postUserUpdate} />
                </ProfileContainer>
                :
                this.state.boolSubmit ?
                    this.props.history.push('/user-product')
                    :
                    (
                        <ProgressBar></ProgressBar>
                    )
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: pullUser,
    editData: pullEditData,
    errData: pullError
})

const mapDispatchToProps = dispatch => ({
    get_user_start: userId => (dispatch(get_user_start(userId))),
    post_update_start: postData => dispatch(post_update_start(postData))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)
