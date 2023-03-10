import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import(useMutation) from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [Login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await Login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        }   catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: '',
        });
     };
}
