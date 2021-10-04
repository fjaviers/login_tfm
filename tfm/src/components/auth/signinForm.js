import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                type='email'
                title=''
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='sign-in-form__password'
                type='password'
                title=''
                placeholder='Contraseña'
                name='password'
                component={FormInput}/>
                <div className='sign-in-form__line'></div>
                <Field className='sign-in-form__login'
                 onClick={() => history.push('/account')}
                type='submit'
                title='Login'
                name='login'
                component={FormButton}/>
                

            </form>
        )
    }
}
SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);
export default SignInForm;