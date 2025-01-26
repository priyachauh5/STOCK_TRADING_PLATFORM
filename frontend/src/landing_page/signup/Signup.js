import React, { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your signup logic here, such as sending data to an API.
    };

    return (
        <div style={{ display: 'flex', minHeight: '700px'}}>
            {/* Left Side: Image Section */}
            <div style={{ flex: 1, backgroundImage: 'url(https://i0.wp.com/earninvestlive.com/wp-content/uploads/2022/08/Purple-Gradient-Mockup-Stock-Market-App-Promotion-Flyer-1200-%C3%97-900-px-1.jpg?fit=1200%2C900&ssl=1)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

            {/* Right Side: Form Section */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2px' }}>
                <div style={{ maxWidth: '400px', width: '100%' }}>
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: '#007bff',
                                color: '#fff',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
