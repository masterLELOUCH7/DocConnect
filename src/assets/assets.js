import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Rajesh Kumar is a trusted General Physician known for his strong clinical judgment and dedication to preventive care. He specializes in managing lifestyle disorders, viral infections, and chronic conditions with a holistic approach.',
        fees: 400,
        address: {
            line1: '17th Cross, Indiranagar',
            line2: 'HAL Road, Bengaluru'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Ananya Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ananya Sharma is a compassionate Gynecologist with expertise in women’s reproductive health, pregnancy care, and hormonal wellness. She is known for making patients feel comfortable and well-understood.',
        fees: 500,
        address: {
            line1: 'Sector 22, Chandigarh',
            line2: 'Haryana'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Priyanshu Singh',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Priyanshu Singh is a Dermatologist specializing in acne, pigmentation, hair fall management, and cosmetic skin treatments. Known for modern treatment techniques and patient-friendly counseling.',
        fees: 700,
        address: {
            line1: 'Powai Lane',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Abhishek Verma',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Abhishek Verma is a caring Pediatrician who specializes in child growth monitoring, vaccination, and treatment of common childhood illnesses with utmost patience and warmth.',
        fees: 350,
        address: {
            line1: 'Kukatpally Road',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Manvi Bansal',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Manvi Bansal specializes in diagnosing and managing neurological disorders including migraines, epilepsy, and nerve function issues. She is known for detailed evaluation and effective care plans.',
        fees: 600,
        address: {
            line1: 'Salt Lake Sector 5',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Arjun Mehta',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Arjun Mehta is an experienced Neurologist focused on treating stroke recovery cases, spinal cord disorders, and neuro-rehabilitation using advanced clinical techniques.',
        fees: 650,
        address: {
            line1: 'MG Road',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Vivek Gupta',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vivek Gupta is a respected General Physician skilled in treating infectious diseases, diabetes, blood pressure, and seasonal illness with a preventive and patient-centric approach.',
        fees: 450,
        address: {
            line1: 'Sector 18',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Megha Kapoor',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Megha Kapoor focuses on high-risk pregnancy care, menstrual issues, PCOS treatment, and fertility support, offering personalized and supportive consultations.',
        fees: 550,
        address: {
            line1: 'Civil Lines',
            line2: 'Kanpur, Uttar Pradesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavita Nair',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Kavita Nair is a Dermatologist specializing in aesthetic skin procedures, allergy management, and anti-aging treatments using safe and tested dermatological practices.',
        fees: 500,
        address: {
            line1: 'Vyttila',
            line2: 'Kochi, Kerala'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Suresh Reddy',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Suresh Reddy is known for his patient approach with newborn and toddler care, vaccinations, nutrition guidance, and pediatric emergency handling.',
        fees: 450,
        address: {
            line1: 'Jubilee Hills',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ritu Malhotra',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ritu Malhotra specializes in treating migraine disorders, sleep disorders, dementia, and nerve pain with a strong emphasis on lifestyle-based recovery.',
        fees: 700,
        address: {
            line1: 'MI Road',
            line2: 'Jaipur, Rajasthan'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Manish Thakur',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Manish Thakur is committed to helping patients with neurological disability, balance problems, and neuromuscular disorders through accurate diagnosis and advanced care.',
        fees: 650,
        address: {
            line1: 'Sector 12',
            line2: 'Gurgaon, Haryana'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sneha Pandey',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Sneha Pandey specializes in lifestyle counseling, chronic illness management, and preventive healthcare with the goal of improving long-term wellness.',
        fees: 400,
        address: {
            line1: 'Boring Road',
            line2: 'Patna, Bihar'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Abhishek Nayak',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Abhishek Nayak provides expert care in fertility counseling, adolescent gynecology, and treatment of complex menstrual irregularities with modern clinical approaches.',
        fees: 550,
        address: {
            line1: 'Hazratganj',
            line2: 'Lucknow, Uttar Pradesh'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Babita Iyer',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Babita Iyer specializes in skin rejuvenation, scar reduction treatments, and dermatological therapy with a gentle and effective clinical style.',
        fees: 500,
        address: {
            line1: 'T. Nagar',
            line2: 'Chennai, Tamil Nadu'
        }
    },
];

