import React from 'react';
import kader from '../../assets/images/Kader_Goni.png'
import {SiPolymerproject} from 'react-icons/si'
import {AiFillPhone} from 'react-icons/ai'

const Protfolio = () => {
    return (
        <div className='mt-20 mx-4 md:mx-8 lg:mx-16' data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
            <h1 className='text-3xl uppercase font-bold text-center text-cyan-500 my-8'>My Portfolio</h1>
            <div className="border text-center md:w-[500px] mx-auto p-5 border-x-8 border-cyan-200 rounded-2xl shadow-xl">
                <div class="avatar">
                    <div class="w-32 mask mask-squircle">
                        <img src={kader} />
                    </div>
                </div>
                <div className="">
                    <h1 className='text-cyan-500 font-bold text-2xl'>Kader Goni</h1>
                    <h1 className='font-bold'>Koirakuri, Nalitabari-2111, Sherpur.</h1>
                    <p className=''>I am a student of Honurs 1st Year of Nazmul Smrity Govt. Collage. and I'm a junior MERN Stack Web Developer</p>
                </div>
            </div>
            <h1 className='text-3xl uppercase font-bold text-center underline underline-offset-4 text-blue-500 my-10'>Others Information</h1>
            <div className="grid md:grid-cols-1 mt-10 lg:grid-cols-2 gap-5">
                <div className="border p-3 border-x-8 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Coding Skills</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>HTML & CSS: <span className='text-primary'>85%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="90" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>JavaScript : <span className='text-primary'>60%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="60" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>Node js: <span className='text-primary'>40%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="40" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>React JS: <span className='text-primary'>70%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="80" max="100"></progress>
                        </div>
                        <div className="">
                            <h1 className='text-blue-500 mb-0 font-bold'>WordPress: <span className='text-primary'>85%</span></h1>
                            <progress class="progress progress-primary mt-0 h-[16px] w-full" value="92" max="100"></progress>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-left" data-aos-delay="400" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Educational Skills</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>HSC - 2020</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>HNHNP Moitry Collage</h1>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>SSC - 2018</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Bonkura High School</h1>
                        </div>
                        <h1 className='text-primary mb-5 font-bold text-2xl'>My best Project</h1>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
                            <a href="https://yoga-master-web-service.web.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />Yoga Master Online</h1>
                            </a>
                            <a href="https://organic-food-shop-1fb8c.web.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />Organic Food Shop</h1>
                            </a>
                            <a href="https://digital-institute-6613c0.netlify.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'><SiPolymerproject width={24} />Digital Institute</h1>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-right" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Contact Information</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Address :</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Koirakuri, Nalitabari-2111, Sherpur.</h1>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Phone Number :</h1>
                            <div class="card-actions mt-3">
                                <a href="tel:+0178226984" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone />+01782269384 </button></a>
                                <a href="tel:+01611632184" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone />+01611632184 </button></a>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Email :</h1>
                            <div class="card-actions mt-3">
                                <a href="mailto:kadergoni35@gmail.com"><span className='text-primary text-xl'> kadergoni35@gmail.com </span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="800">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Project Information</h1>
                    <p className='text-blue-500'>1. This project use react js, node js, Express, HTML, CSS, main code</p>
                    <p className='text-blue-500'>2. Project main 4 page home, portfolio, blog, dashboard</p>
                    <p className='text-blue-500'>3. Home page 7 section banner, footer, purses, review, business, brand, some purses section 1 button clik the purses page</p>
                    <p className='text-blue-500'>4. Dashboard simple user 3 page seen profile, add review, my Order and admin 5 page seen profile, manage order, manage product, add admin, add product </p>
                    <p className='text-blue-500'>5. Navbar Notfound page and some animation aos</p>
                    <p className='text-blue-500'>6. React dependence use react hook, react form, firebase, react icon, react payment system added</p>
                </div>
            </div>
        </div>
    );
};

export default Protfolio;