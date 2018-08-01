import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FormField from '../FormField';
import FormButton from '../FormButton';
import routes from '../../constants/routes';
import './index.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            car: {
                id: props.car ? props.car.id : '',
                brand: props.car ? props.car.brand : '',
                model: props.car ? props.car.model : '',
                productionYear: props.car ? props.car.productionYear : '',
                engineCapacity: props.car ? props.car.engineCapacity : '',
                enginePower: props.car ? props.car.enginePower : '',
                price: props.car ? props.car.price : '',
                owner: props.car ? props.car.owner : ''
            }
        };
    }

    handleChange = name => event => {
        this.setState({
            car: {
                ...this.state.car,
                [ name ]: event.target.value
            }
        });
    }

    handleChangeBrand = this.handleChange('brand');

    handleChangeModel = this.handleChange('model');

    handleChangeProductionYear = this.handleChange('productionYear');

    handleChangeEngineCapacity = this.handleChange('engineCapacity');

    handleChangeEnginePower= this.handleChange('enginePower');

    handleChangePrice = this.handleChange('price');

    handleChangeOwner = this.handleChange('owner');

    goToPage = path => this.props.history.push(path);

    clearForm = () => this.setState({
        car: {
            brand: '',
            model: '',
            productionYear: '',
            engineCapacity: '',
            enginePower: '',
            price: '',
            owner: ''
        }
    });

    handleCancel = () => {
        this.clearForm();
        this.goToPage(routes.HOME);
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.car);
        this.clearForm();
    };

    render() {
        return (
            <form
                className="form"
                onSubmit={this.handleSubmit}
            >
                <FormField
                    name="Brand"
                    type="text"
                    value={this.state.car.brand}
                    onChange={this.handleChangeBrand}
                />
                <FormField
                    name="Model"
                    type="text"
                    value={this.state.car.model}
                    onChange={this.handleChangeModel}
                />
                <FormField
                    name="Production year"
                    type="number"
                    value={this.state.car.productionYear}
                    onChange={this.handleChangeProductionYear}
                />
                <FormField
                    name="Engine capacity"
                    type="number"
                    value={this.state.car.engineCapacity}
                    onChange={this.handleChangeEngineCapacity}
                />
                <FormField
                    name="Engine power"
                    type="number"
                    value={this.state.car.enginePower}
                    onChange={this.handleChangeEnginePower}
                />
                <FormField
                    name="Price"
                    type="number"
                    value={this.state.car.price}
                    onChange={this.handleChangePrice}
                />
                <FormField
                    name="Owner"
                    type="text"
                    value={this.state.car.owner}
                    onChange={this.handleChangeOwner}
                />
                <div className="form__actions">
                    <FormButton
                        value="Submit"
                        type="submit"
                        design="accept"
                        onClick={this.handleSubmit}
                    />
                    <FormButton
                        value="Cancel"
                        type="reset"
                        design="cancel"
                        onClick={this.handleCancel}
                    />
                </div>
            </form>
        );
    }
}

export default withRouter(Form);
