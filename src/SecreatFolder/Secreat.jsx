import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        registrationDate: "",
        name: "",
        email: "",
        whatsapp: "",
        college: "",
        studentEmail: "",
        year: "",
        domain: "",
        amountPaid: "",
        totalFees: "",
        preferredMonth: "",
        referrals: [{ name: "", contact: "" }],
        balanceFees: "",
        discount: 0,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showReferralModal, setShowReferralModal] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleReferralChange = (index, e) => {
        const newReferrals = [...formData.referrals];
        newReferrals[index][e.target.name] = e.target.value;
        setFormData({ ...formData, referrals: newReferrals });
    };

    const addReferral = () => {
        setFormData({
            ...formData,
            referrals: [...formData.referrals, { name: "", contact: "" }],
        });
    };

    const calculateDiscount = () => {
        const referralCount = formData.referrals.filter(
            (r) => r.name.trim() !== "" && r.contact.trim() !== ""
        ).length;

        let discount = 0;
        if (referralCount >= 10) discount = "Free Internship";
        else if (referralCount >= 5) discount = 2000;
        else if (referralCount >= 3) discount = 1000;

        setFormData({ ...formData, discount });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Validate amounts
            if (parseFloat(formData.totalFees) <= parseFloat(formData.amountPaid)) {
                throw new Error('Total fees must be greater than amount paid');
            }

            // const response = await fetch("http://localhost:9098/qubicgen/contact"
            const response = await fetch("https://qg.vidyantra-dev.com/qubicgen/contact"
            , {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            toast.success("Registration Successful! 🎉", {
                className: 'bg-green-500 text-white'
            });
            
            // Clear form state
            setFormData({
                registrationDate: "",
                name: "",
                email: "",
                whatsapp: "",
                college: "",
                studentEmail: "",
                year: "",
                domain: "",
                amountPaid: "",
                totalFees: "",
                preferredMonth: "",
                referrals: [{ name: "", contact: "" }],
                balanceFees: "",
                discount: 0,
            });

        } catch (error) {
            console.error('Error:', error);
            toast.error(`Registration Failed: ${error.message}`, {
                className: 'bg-red-500 text-white'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Effect to calculate balance fees
    useEffect(() => {
        const amountPaid = parseFloat(formData.amountPaid) || 0;
        const totalFees = parseFloat(formData.totalFees) || 0;
        const balanceFees = totalFees - amountPaid;

        setFormData((prevData) => ({
            ...prevData,
            balanceFees: balanceFees >= 0 ? balanceFees : 0, // Ensure balanceFees is not negative
        }));
    }, [formData.amountPaid, formData.totalFees]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("https://qg.vidyantra-dev.com/qubicgen/allCourses");
                const data = await response.json();
                setCourses(data); // Assuming data is an array of course objects
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    const removeReferral = (index) => {
        const newReferrals = formData.referrals.filter((_, i) => i !== index);
        setFormData({ ...formData, referrals: newReferrals });
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="relative flex flex-col lg:flex-row justify-between items-start min-h-screen py-12 px-4 sm:px-6 lg:px-8"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
                    <div className="relative mb-8 lg:mb-0 lg:fixed lg:top-4 lg:left-4 lg:z-10">
                        <img
                            src="https://qubicgen.com/assets/og-CWlc-vx7.png"
                            className="h-16 sm:h-20 mx-auto lg:mx-0"
                            alt="QubicGen Logo"
                        />
                    </div>
                    <div className="mt-8 lg:mt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center lg:text-left lg:relative top-64 text-white"
                        >
                            <Typewriter
                                options={{
                                    strings: ['#FromCampusToCareer...!'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </motion.h1>
                    </div>
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    className="relative w-full lg:max-w-xl lg:ml-8"
                >
                    <div className="relative w-full p-4 sm:p-6 rounded-xl shadow-2xl backdrop-blur-3xl border border-gray-600 bg-white lg:right-8">
                        <motion.h2
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-xl sm:text-2xl font-bold text-center text-white mb-4 sm:mb-6"
                        >
                            <span className="text-[#0056b3]">  Student On Boarding Form </span>
                        </motion.h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                            <label>
                                <span className="text-black mb-1  ">Registration Date *</span>
                                <div className="relative">
                                    <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleChange} required className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" />

                                </div>
                            </label>

                            <label>
                                <span className="text-black">Full Name *</span>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" />
                            </label>

                            <label>
                                <span className="text-black">Email ID *</span>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email ID *" className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" />
                            </label>

                            <label>
                                <span className="text-black">WhatsApp Number *</span>
                                <input 
                                    type="number" 
                                    name="whatsapp" 
                                    value={formData.whatsapp} 
                                    onChange={handleChange} 
                                    required 
                                    pattern="[0-9]{10,15}" 
                                    title="Please enter a valid phone number"
                                    placeholder="WhatsApp Number *" 
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" 
                                />
                            </label>

                            <label>
                                <span className="text-black">College Name *</span>
                                <input type="text" name="college" value={formData.college} onChange={handleChange} required placeholder="College Name *" className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" />
                            </label>

                            <label>
                                <span className="text-black">Student Mail ID *</span>
                                <input 
                                    type="email" 
                                    name="studentEmail" 
                                    value={formData.studentEmail} 
                                    onChange={handleChange} 
                                    required 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                    placeholder="Student Mail ID *" 
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" 
                                />
                            </label>

                            <label>
                                <span className="text-black">Year of Studying *</span>
                                <input 
                                    type="number" 
                                    name="year" 
                                    value={formData.year} 
                                    onChange={handleChange} 
                                    required 
                                    min="1" 
                                    max="5"
                                    placeholder="Year of Studying 1, 2, 3 , 4 " 
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" 
                                />
                            </label>

                            <label>
                                <span className="text-black">Domain Opted *</span>
                                <select
                                    name="domain"
                                    value={formData.domain}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                >
                                    <option value="" >--Select a Domain--</option>
                                    {courses.map(course => (
                                        <option key={course.id} className="text-black" value={course.courseName}>
                                            {course.courseName}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label>
                                <span className="text-black">Amount Paid *</span>
                                <input
                                    type="number"
                                    name="amountPaid"
                                    value={formData.amountPaid}
                                    onChange={handleChange}
                                    required
                                    
                                    placeholder="Amount Paid *"
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                />
                            </label>

                            <label>
                                <span className="text-black">Total Fees *</span>
                                <input
                                    type="number"
                                    name="totalFees"
                                    value={formData.totalFees}
                                    onChange={handleChange}
                                    required
                               
                                    placeholder="Total Fees *"
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                />
                            </label>

                            <label>
                                <span className="text-black">Preferred Month *</span>
                                <input type="month" name="preferredMonth" value={formData.preferredMonth} onChange={handleChange} required className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black" />
                            </label>

                            <label>
                                <span className="text-black">Balance Fees</span>
                                <input
                                    type="number"
                                    name="balanceFees"
                                    value={formData.balanceFees}
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                    placeholder="Balance Fees"
                                    disabled
                                />
                            </label>

                            <div className="md:col-span-2 flex flex-wrap gap-2 mt-2">
                                {formData.referrals.map((referral, index) => (
                                    (referral.name.trim() || referral.contact.trim()) && (
                                        <div
                                            key={index}
                                            className="relative group bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 hover:bg-blue-600 transition-colors"
                                            title={`${referral.name} - ${referral.contact}`}
                                        >
                                            <span className="max-w-[30ch] truncate">
                                                {referral.name || referral.contact}
                                            </span>
                                            <button
                                                type="button"
                                                onClick={() => removeReferral(index)}
                                                className="ml-1 hover:text-red-200"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    )
                                ))}
                            </div>

                            <div className="md:col-span-2">
                                <p
                                    className="text-black text-right sm:text-right text-sm sm:text-[12px] cursor-pointer"
                                    onClick={() => setShowReferralModal(true)}
                                >
                                    Add Referral +
                                </p>
                            </div>

                            <motion.div className="md:col-span-2 flex justify-center">
                                <button type="submit" disabled={isSubmitting} className="px-8 py-3 bg-[#0056b3] hover:bg-blue-700 text-white rounded-lg font-bold">
                                    {isSubmitting ? "Submitting..." : "Register Now"}
                                </button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </motion.div>

            {showReferralModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg text-black border border-gray-600 w-full max-w-xs sm:max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-black">Refer Your Friends</h3>
                            <button onClick={() => setShowReferralModal(false)} className="text-black text-xl">&times;</button>
                        </div>
                        <>
                        <div className=" h-96 overflow-y-auto px-2">
                        {formData.referrals.map((referral, index) => (
                            <div key={index} className="space-y-2 mb-3 ">
                                <input
                                    type="text"
                                    name="name"
                                    value={referral.name}
                                    onChange={(e) => handleReferralChange(index, e)}
                                    placeholder="Friend's Name"
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                />
                                <input
                                    type="text"
                                    name="contact"
                                    value={referral.contact}
                                    onChange={(e) => handleReferralChange(index, e)}
                                    placeholder="Contact Number/Email"
                                    className="w-full p-3 border border-gray-800 rounded-lg bg-white text-black"
                                />
                            </div>
                        ))}
                        </div>
                        </>
                        <button onClick={addReferral} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full">
                            Add Another
                        </button>
                        <button
                            onClick={() => {
                                calculateDiscount();
                                setShowReferralModal(false);
                            }}
                            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg w-full"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}
