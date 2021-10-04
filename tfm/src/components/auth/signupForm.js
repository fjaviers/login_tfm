import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
    render() {
        const { className, handleSubmit } = this.props; 
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
                <Field className='sign-up-form__name'
                type='Códgo'
                title=''
                placeholder='Nombre'
                name='name'
                component={FormInput}/>
                <Field className='sign-up-form__email'
                type='email'
                title=''
                placeholder='Email'
                name='email'
                component={FormInput}/>
                <Field className='sign-up-form__password'
                type='password'
                title=''
                placeholder='Contraseña'
                name='password'
                component={FormInput}/>
                <Field className='sign-up-form__confirm'
                type='password'
                title=''
                placeholder='Confirmar Contraseña'
                name='confirm'
                component={FormInput}/>
                <Field className='sign-up-form__codigo'
                type='codigo'
                title=''
                placeholder='Código descuento'
                name='Código'
                component={FormInput}/>

                <div className='sign-up-form__line'></div>
                <Field className='sign-up-form__login'
                onClick={() => history.push('/cuenta')}
                type='submit'
                title='Crear Cuenta'
                name='lCrear Cuenta'
                component={FormButton}/>
                <Field className='sign-up-form__back'
                onClick={() => history.push('/')}
                type='button'
                title='Volver'
                name='Volver'
                short={true}
                component={FormButton}/>

                
            </form>
        )
    }
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;