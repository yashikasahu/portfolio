import React from 'react'
import { RiFileExcel2Fill } from "react-icons/ri";
import { SiN8N } from "react-icons/si";
import { SiGooglesheets } from "react-icons/si";
import { SiLooker } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { GrGithub, GrMysql } from "react-icons/gr";
import { SiStreamlit } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiRoboflow } from "react-icons/si";
import Icon from '../common/Icon';


const Technologies = () => {
  return (
    <section id='skills' className='pb-16 md:pb-24'>
        <div className='container mx-auto px-4'>
            <div className='text-center mb-12 md:mb-16'>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800'>Technologies I Use</h2>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8 max-w-4xl mx-auto'>
                
                <Icon
                    icon={FaPython}
                    text={"Python"}
                ></Icon>
                <Icon
                    icon={RiFileExcel2Fill}
                    text={"Excel"}
                ></Icon>
                <Icon
                    icon={SiN8N}
                    text={"N8N"}
                ></Icon>
                <Icon
                    text={"PowerBi"}
                    img={"https://img.icons8.com/?size=100&id=QMTbsd0FVhHS&format=png&color=000000"}
                ></Icon>
                <Icon
                    text={"Tablue"}
                    img={"https://img.icons8.com/?size=100&id=BQJc3mm8NGYs&format=png&color=000000"}
                ></Icon>
                <Icon
                    icon={SiScikitlearn}
                    text={"ScikitLearn"}
                ></Icon>
                <Icon
                    icon={SiGooglesheets}
                    text={"Google sheets"}
                ></Icon>
                <Icon
                    icon={SiLooker}
                    text={"Looker"}
                ></Icon>
                <Icon
                    icon={SiOpencv}
                    text={"OpenCV"}
                ></Icon>
                <Icon
                    icon={GrMysql}
                    text={"MySQL"}
                ></Icon>
                <Icon
                    icon={SiStreamlit}
                    text={"Streamlit"}
                ></Icon>
                <Icon
                    icon={SiRoboflow}
                    text={"Roboflow"}
                ></Icon>
                <Icon
                    icon={GrGithub}
                    text={"Github"}
                ></Icon>
                <Icon
                    icon={FaGitAlt}
                    text={"Git"}
                ></Icon>
            
            </div>
        </div>
    </section>
  )
}

export default Technologies

{/* <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaHtml5 className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaCss3Alt className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaJsSquare className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaReact className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaNodeJs className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiExpress className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiMongodb className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><GrMysql className='scale-[2]'/></span>
                    </div>
                    
                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiCloudinary className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><FaGitAlt className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><GrGithub className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><RiTailwindCssFill className='scale-[2]'/></span>
                    </div>

                    <div className='bg-white p-5 rounded-2xl shadow-lg transition-all duration-300 group-hover:translate-y-2 '>
                        <span className='p-2'><SiRazorpay className='scale-[2]'/></span>
                    </div> */}
