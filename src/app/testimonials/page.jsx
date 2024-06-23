"use client"
import TestimonialSlider from "@/components/TestimonialsSlider";
import Circles from "@/components/Circle";
import {motion} from "framer-motion";
import {fadeIn} from "@/components/variant";
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";

const Testimonials = () => {
    return <section className="h-screen bg-primary/30 py-32 text-center">
        <Circles/>
        <div className="container h-full flex items-center justify-center flex-col ">
            {/* row */}
            <motion.h2 variants={fadeIn('up', 0.2)} initial="hidden" animate="show" exit="hidden"
                       className="h2 mb-8 xl:mb-0">
                What clients <span className="text-accent">say.</span>
            </motion.h2>
            {/* Slider */}
            <motion.div
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                animate="show" exit="hidden"
                className="w-full">
                <TestimonialSlider/>
            </motion.div>
        </div>
        <Bulb/>
    </section>

};

export default Testimonials;
