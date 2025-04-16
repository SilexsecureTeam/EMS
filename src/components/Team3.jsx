import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SendHorizonal } from "lucide-react";
import business from '../assets/businesswoman.jpg'
import woman from '../assets/womanglass.png'
import women from '../assets/womanwrite.png'

const teamMembers = [
  {
    name: "Mr. John Doe",
    title: "Founder",
    image: woman,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mr. Ronald G.",
    title: "Co - Founder",
    image: business,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mrs. Cristina",
    title: "Secretary",
    image: women,
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const Team3 = () => {
  return (
    <section className="py-16 pb-[200px] bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-[15px] uppercase font-medium tracking-widest text-[#b2b2b2] mb-2">
          Our Team Success
        </h4>
        <h2 className="text-[45px] font-black text-[#303030] mb-4">Our Best Team</h2>
        <p className="text-[#6E6E6E] max-w-[660px] font-medium mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 gap-30 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white"
            >
                <div className="relative max-w-[390px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full  h-[450px] object-cover"
              /> 
              <div className="bg-[#5E5E5E] absolute -bottom-[20%] right-[10%] w-[80%] text-white  flex flex-col items-center">
               <div className="relative py-7 w-full">
                <p className="text-[15px] font-medium uppercase text-[#B2B2B2] mb-1">{member.title}</p>
                <h3 className="text-[25px] text-white font-black mb-4">{member.name}</h3>
                <div className="flex items-center justify-center w-full gap-4 mb-4">
                  <a href={member.socials.facebook} className="text-white bg-[#C3AA8C] rounded-full p-1">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.twitter} className="text-white bg-[#C3AA8C] rounded-full p-1">
                    <FaTwitter />
                  </a>
                  <a href={member.socials.linkedin} className="text-white bg-[#C3AA8C] rounded-full p-1">
                    <FaLinkedinIn />
                  </a>
                </div>
                <button className="bg-[#C3AA8C] absolute bottom-0 right-0 text-white p-4">
                  <SendHorizonal size={20} />
                </button>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team3;
