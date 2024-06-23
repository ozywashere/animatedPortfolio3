"use client"
import {BsArrowRight} from "react-icons/bs";
import {motion} from "framer-motion";
import {fadeIn} from "@/components/variant";


const Contact = () => {
    return <section className="h-screen bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
            <div className="w-full flex flex-col max-w-[700px]">
                <motion.h2
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="h2 text-center mb-12">Let's <span className="text-accent">connect.</span></motion.h2>
                {/*  form*/}
                <motion.form
                    variants={fadeIn('up', 0.4)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className="flex flex-col gap-6 w-full mx-auto">
                    <div className="flex gap-x-6 w-full">
                        <input type="text" placeholder="name" className="input"/>
                        <input type="text" placeholder="email" className="input"/>
                    </div>
                    <input
                        type="text"
                        placeholder="subject"
                        className="input"
                    />
                    <textarea placeholder="message" className="textarea"/>
                    <button
                        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                            Let's talk
                        </span>
                        <BsArrowRight
                            className="-translate-y-[120%] opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 group-hover:flex transition-all duration-500 absolute text-[22px]"
                        />
                    </button>
                </motion.form>
            </div>
        </div>
    </section>;
};

export default Contact;
