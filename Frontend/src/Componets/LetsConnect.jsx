import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RiMailFill } from 'react-icons/ri';


const Contact = () => {


    const Contact = () => {
        const [formData, setFromData] = useState({
            name: '',
            email: '',
            msessage: '',
        })
    }

    const [status, setStatus] = useState(idle);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e) => {
        setFromData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setStatus('loading')
        setStatusMessage('Sending message....')

        try {
            const response  = await fetch('http://localhost:3000/contact',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',                
                },
                body: JSON.stringify(FormData)
            });

            const data = await response.json();
            
            if (response.ok) {
                setStatus('success')
                setStatusMessage(data.msessage || 'message sent sucessfully!')
                setFromData ({ name: '', email: '', message : ''});
            }else {
                setStatus('error')
                setStatusMessage(data.message || 'Submisson failed. please try again.');
            }
        } catch (error) {
            console.error('Frontend Fetch Error : ', error);
            setStatus('error');
            setStatusMessage('Network error. Is the server running?')
        }
    }

    const getStatusStyles = () => {
        switch (status) {
            case 'success':
                return 'text-green-500 font-semibold';
            case 'error':
                return 'text-red-500 font-semibold';
            default: 
                return 'text-gray-500';
        }
    }
        

    return (
        <section 
            id="contact" 
            className='py-24'
            // Gradient background using color-mix for opacity effect
            style={{ 
                background: `linear-gradient(to bottom right, 
                    color-mix(in srgb, var(--color-accent) 5%, transparent), 
                    color-mix(in srgb, var(--bg-secondary) 10%, transparent)
                )` 
            }}
        >
            <div className='max-w-2xl mx-auto px-8'>
                <div className='text-center mb-12'>
                    <h2 
                      className='font-heading text-4xl font-medium mb-4'
                      style={{ color: 'var(--text-default)' }}
                    >
                      Let's Connect
                    </h2>
                    <p className='text-xl text-gray-500'>Ready to create something meaningful together?</p>
                </div>
                <form className='space-y-6'>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <input 
                            type="text" 
                            placeholder="Your Name" 
                            className='w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all'
                            style={{ 
                                backgroundColor: 'var(--bg-primary)', 
                                border: '1px solid var(--color-border)',
                                color: 'var(--text-default)',
                                '--tw-ring-color': 'var(--color-accent)', // Use accent for focus ring
                            }}
                        />
                        <input 
                            type="email" 
                            placeholder="Your Email" 
                            className='w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all'
                            style={{ 
                                backgroundColor: 'var(--bg-primary)', 
                                border: '1px solid var(--color-border)',
                                color: 'var(--text-default)',
                                '--tw-ring-color': 'var(--color-accent)',
                            }}
                        />
                    </div>
                    <textarea 
                        rows="6" 
                        placeholder="Your Message" 
                        className='w-full px-6 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all resize-none'
                        style={{ 
                            backgroundColor: 'var(--bg-primary)', 
                            border: '1px solid var(--color-border)',
                            color: 'var(--text-default)',
                            '--tw-ring-color': 'var(--color-accent)',
                        }}
                    ></textarea>
                    <div className='text-center'>
                        <button 
                            type="submit" 
                            className='px-8 py-4 rounded-xl hover:shadow-lg hover:glow transition-all'
                            style={{ 
                                backgroundColor: 'var(--color-accent)', 
                                color: 'var(--bg-primary)' 
                            }}
                        >
                            Send Message
                        </button>
                        <p className='mt-4 text-gray-500'>
                            or reach me at <a href="mailto:hello@bishalgaihre.com" className='hover:underline' style={{ color: 'var(--color-accent)' }}>hello@bishalgaihre.com</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;