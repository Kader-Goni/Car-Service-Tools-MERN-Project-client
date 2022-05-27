import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {AiFillPhone} from  'react-icons/ai'
import profile from '../../assets/images/Kader_Goni.png'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1 className='text-2xl font-bold text-primary text-center'>My Profile</h1>
            <div class="card w-[100%] mt-16 mx-auto lg:w-[500px] bg-base-100 border-8 border border-blue-200 rounded-2xl shadow-xl" data-aos="zoom-in-up" data-aos-delay="100" data-aos-duration="800">
                <div className="avatar mt-5">
                    <div class="w-28 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        { user.photoURL? <img src={user.photoURL} alt='Profile pic' /> : <img src={profile} alt='Profile pickter' />}
                    </div>
                </div>
                <div class="card-body items-center text-center">
                    <h2 class="text-3xl text-primary font-bold">{user.displayName}</h2>
                    <h2 class="text-xl text-primary font-bold">{user.email}</h2>
                    <p>I am a student of Honurs 1st Year of Nazmul Smrity Govt. Collage. and I'm a junior MERN Stack Web Developer</p>
                    <div class="card-actions">
                    <a href="tel:+01782269384" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +01782269384 </button></a>
                    <button class="btn btn-sm btn-secondary">Update Profile</button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl">
                    <h1 className='text-primary mb-5 font-bold text-2xl'>Contact Information</h1>
                    <div className="grid gap-2">
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Address</h1>
                            <h1 className='text-blue-500 mb-0 font-bold'>Koirakuri, Nalitabari-2111, Sherpur.</h1>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Phone Number</h1>
                            <div class="card-actions mt-3">
                                <a href="tel:+01782269384" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +01782269384 </button></a>
                                <a href="tel:+01611632184" ><button className='btn btn-primary font-bold btn-sm'><AiFillPhone /> +01611632184 </button></a>
                            </div>
                        </div>
                        <div className="">
                            <h1 className='text-secondary text-xl mb-0 font-bold'>Email</h1>
                            <div class="card-actions mt-3">
                                <a href="mailto:kadergoni35@gmail.com"><span className='text-primary text-xl'>kadergoni35@gmail.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="border p-3 border-x-8 my-10 border-blue-200 rounded-2xl shadow-xl">
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
                            <a href="https://yoga-master-web-service.web.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'>Yoga Master Online</h1>
                            </a>
                            <a href="https://organic-food-shop-1fb8c.web.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'>Organic Food Shop</h1>
                            </a>
                            <a href="https://digital-institute-6613c0.netlify.app/" target={'_blank'} className='border p-3 border-x-8 border-blue-200 rounded-full'>
                                <h1 className='text-blue-500 mb-0 font-bold flex items-center'>Digital Institute</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;