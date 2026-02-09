import React from 'react'
import Card from '../common/Card'
import chatbot from '../../assets/chatbot.jpeg'
import ressender from '../../assets/resumesender.jpeg'
import CBA from '../../assets/CBA.jpeg'
import traffic from '../../assets/trafficdetection.jpeg'
import dailytracker from '../../assets/dailytracker.jpeg'

const Projects = () => {
  return (
    <section id='projects' className='container mx-auto px-4 py-12 md:py-16 lg:py-24'>
        <div className='text-center mb-10 md:mb-16'>
            <h2 className='text-4xl lg:text-6xl sm:text-5xl font-bold text-gray-800'>My Projects</h2>
            <p className='pt-4'>Here are a few of my best projects that showcase my skills in action</p>
        </div>

        <div className='rounded-2xl lg:rounded-3xl overflow-hidden mb-10 lg:mb-16 px-6'>
            <div className='lg:flex mb-6 shadow-xl'>
                <div className='lg:w-1/2'>
                    <img src={chatbot} alt='Chatbot Project' className='w-full h-full object-cover' />
                </div>

                <div className='lg:w-1/2 p-6 md:p-8 lg:p-12'>
                    <h3 className='text-xl md:text-3xl font-bold text-gary-900 mb-4'>Automated Data Analyst - Insight Chatbot</h3>
                    <p className='text-gray-700 leading-relaxed mb-6 line-clamp-2 md:line-clamp-4'>A Streamlit-based data analytics platform with AI-powered insights, Automated EDA, and dashboards. Quickly upload your data, visualize patterns, and get intelligent recommendations from an AI assistant.</p>

                    <div className='flex flex-wrap gap-2 mb-6'>
                        <span className='skill-pill'>Python</span>
                        <span className='skill-pill'>Streamlit</span>
                        <span className='skill-pill'>Pandas</span>
                        <span className='skill-pill'>Plotly</span>
                        <span className='skill-pill'>GROQ Api</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <a href='https://automated-data-analysis-and-chat-bot.streamlit.app/' className='inline-flex items-center gap-2 font-semibold hover:underline' target='_blank'> Get Demo</a>
                    </div>
                </div>
            </div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-6 px-4'>

                <Card 
                    image={CBA}
                    projectHeading={"Customer Behaviour Analysis"} 
                    projPara={"This project demonstrates a complete, real-world data analytics workflow used in retail organizations to understand customer behavior, purchasing trends, and revenue drivers."}
                    skill1={'Python'}
                    skill2={'PowerBi'}
                    skill3={'MySQL'}
                    link={"sdfg"}
                />

                <Card 
                    image={ressender}
                    projectHeading={"Automated Resume Sender"} 
                    projPara={"A smart automation workflow that sends personalized job application emails (with attachments) to multiple companies daily — fully powered by n8n, Google Sheets."}
                    skill1={'N8N'}
                    skill2={'Hunter API'}
                    skill3={'Google sheets'}
                    link={"xcvbn"}
                />

            </div>

            <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 py-6 px-4'>

                <Card 
                    image={traffic}
                    projectHeading={"Traffic violation detection System"} 
                    projPara={"AI-Powered Real-Time Helmet Detection, Triple Riding Detection & Road Safety Monitoring"}
                    skill1={'Python'}
                    skill2={'Roboflow'}
                    skill3={'Pytorch'}
                    link={"sdfg"}
                />

                <Card 
                    image={dailytracker}
                    projectHeading={"Habit Tracker"} 
                    projPara={"A smart automation workflow that sends personalized job application emails (with attachments) to multiple companies daily — fully powered by n8n, Google Sheets."}
                    skill1={'Google Sheets'}
                    skill2={'Lookups'}
                    skill3={'Visualization'}
                    link={"xcvbn"}
                />

            </div>

        </div>
    </section>
  )
}

export default Projects
