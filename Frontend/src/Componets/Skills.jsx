import React from 'react';
import { RiPaletteFill, RiCodeBoxFill, RiDatabase2Fill, RiToolsFill } from 'react-icons/ri'; // Example icons

const skillData = [
    { title: 'Design', icon: RiPaletteFill, tools: 'Figma, Framer, Adobe XD' },
    { title: 'Frontend', icon: RiCodeBoxFill, tools: 'React, Next.js, Tailwind CSS' },
    { title: 'Backend', icon: RiDatabase2Fill, tools: 'Node.js, Express, MongoDB' },
    { title: 'Tools', icon: RiToolsFill, tools: 'Git, VS Code, Postman' },
];

const SkillCard = ({ title, icon: Icon, tools }) => {
    return (
        <div 
            className='skill-card p-6 rounded-xl shadow-lg hover:shadow-xl hover:glow transition-all group'
            style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-default)' }}
        >
            <div className='text-center space-y-4'>
                <div 
                    className='w-16 h-16 mx-auto rounded-xl flex items-center justify-center transition-all'
                    // Background: Soft accent / Hover: Solid accent
                    style={{ backgroundColor: 'color-mix(in srgb, var(--color-accent) 10%, transparent)', color: 'var(--color-accent)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-accent)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'color-mix(in srgb, var(--color-accent) 10%, transparent)'; e.currentTarget.style.color = 'var(--color-accent)'; }}
                >
                    <Icon className='text-2xl' />
                </div>
                <h3 className='font-semibold text-xl'>{title}</h3>
                <p className='text-gray-500'>{tools}</p>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className='py-24'>
            <div className='max-w-6xl mx-auto px-8'>
                <div className='text-center mb-16'>
                    <h2 
                      className='font-heading text-4xl font-medium mb-4'
                      style={{ color: 'var(--text-default)' }}
                    >
                      Skills &amp; Expertise
                    </h2>
                    <p className='text-xl text-gray-500'>Tools and technologies I work with</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {skillData.map((skill) => (
                        <SkillCard key={skill.title} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;