import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaQuestionCircle, FaRupeeSign } from "react-icons/fa";
import FormModal from "../Technology Overview Componnets/FormModal";

const Pricing = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProgram, setSelectedProgram] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };

    const handleRegisterNow = (programName) => {
        setSelectedProgram(programName);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setSelectedProgram('');
    };

    const handleFormSubmit = async (formData) => {
        console.log(formData);
        handleModalClose();
    };

    return (
        <div className="bg-[#1a1a1a] py-5 px-4 overflow-hidden">
            <motion.h2
                className="text-5xl font-bold mb-6 relative text-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-flex items-center gap-4">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaQuestionCircle className="text-4xl" />
                    </motion.div>
                    Our Programs
                </span>
            </motion.h2>
            <motion.div
                className="flex flex-col md:flex-row justify-center gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Ignite Learn Program */}
                <motion.div
                    className="bg-gradient-to-br from-[#1e1e1e] to-[#252525] border border-gray-700 rounded-lg shadow-md p-6 w-full md:w-80"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Ignite Learn Program</h3>
                    <p className="text-sm text-white mb-2">Self-Paced</p>
                 

                    <div className="flex justify-between">
                        <div>

                            <p className="text-2xl font-bold mb-4 text-white">1 Month</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <p className="text-2xl font-bold mb-4 text-white">  199</p>
                            <span className="text-2xl font-bold mb-4 text-white"><FaRupeeSign /> </span>

                        </div>

                    </div>
                    <button
                        className="bg-purple-500 text-white font-semibold py-2 px-4 rounded mb-6 hover:bg-purple-600 transition-colors"
                        onClick={() => handleRegisterNow("Ignite Learn Program")}
                    >
                        Register Now
                    </button>
                    <ul className="space-y-2 text-gray-300">
                        <li>✔ 20+ High-Quality Recorded Sessions</li>
                        <li>✔ 5 Mini Projects & 1 Capstone Project</li>
                        <li>✔ Certifications for Completion & Excellence</li>
                        <li>✔ Learn at your own pace</li>
                    </ul>
                </motion.div>

                {/* Propel Path Program */}
                <motion.div
                    className="bg-gradient-to-br from-[#1e1e1e] to-[#252525] border border-blue-400 rounded-lg shadow-md p-6 w-full md:w-80"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Propel Path Program</h3>
                    <p className="text-sm mb-2 text-white">Mentorship</p>
                    <div className="flex justify-between">
                        <div>

                            <p className="text-2xl font-bold mb-4 text-white">2 Months</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <p className="text-2xl font-bold mb-4 text-white">  249</p>
                            <span className="text-2xl font-bold mb-4 text-white"><FaRupeeSign /> </span>

                        </div>

                    </div>
                    <button
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mb-6 hover:bg-blue-600 transition-colors"
                        onClick={() => handleRegisterNow("Propel Path Program")}
                    >
                        Register Now
                    </button>
                    <ul className="space-y-2 text-gray-300">
                        <li>✔ 30+ Hours of Live Mentorship</li>
                        <li>✔ 6 Case Studies & 1 Capstone Project</li>
                        <li>✔ Career Guidance & Mock Interviews</li>
                        <li>✔ Personalized Weekly Check-Ins</li>
                    </ul>
                </motion.div>

                {/* Fusion Learn Program */}
                <motion.div
                    className="bg-gradient-to-br from-[#1e1e1e] to-[#252525] border border-gray-700 rounded-lg shadow-md p-6 w-full md:w-80"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139,92,246,0.3)" }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">Fusion Learn Program</h3>
                    <p className="text-sm mb-2 text-white">Dual Path</p>
                    <div className="flex justify-between">
                        <div>

                            <p className="text-2xl font-bold mb-4 text-white">4 Months</p>
                        </div>
                        <div className="flex justify-center items-center ">
                            <p className="text-2xl font-bold mb-4 text-white">  449</p>
                            <span className="text-2xl font-bold mb-4 text-white"><FaRupeeSign /> </span>

                        </div>

                    </div>
                    <button
                        className="bg-purple-500 text-white font-semibold py-2 px-4 rounded mb-6 hover:bg-purple-600 transition-colors"
                        onClick={() => handleRegisterNow("Fusion Learn Program")}
                    >
                        Register Now
                    </button>
                    <ul className="space-y-2 text-gray-300">
                        <li>✔ 40+ Hours of Live Sessions</li>
                        <li>✔ Self-Paced Access to Recorded Content</li>
                        <li>✔ 10 Mini Projects & 2 Capstone Projects</li>
                        <li>✔ Collaboration Excellence Certificate</li>
                    </ul>
                </motion.div>
            </motion.div>

            <FormModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleFormSubmit}
                programType={selectedProgram}
            />
        </div>
    );
};

export default Pricing;