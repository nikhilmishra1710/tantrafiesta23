"use client";

import CardSection from "@/components/teamBytes/CardSection";
import CoLeadSlate from "@/components/teamBytes/CoLeadSlate";
import LeadSlate from "@/components/teamBytes/LeadSlate";
import MemberSlate from "@/components/teamBytes/MemberSlate";
import TitleCard from "@/components/teamBytes/TitleCard";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
      }}
      className="lg:h-screen w-screen pt-24 md:pt-0 lg:overflow-hidden flex lg:flex-row flex-col justify-center items-center bg-black"
    >
      <CardSection start={0} end={1255}>
        <TitleCard
          title="Event Management"
          theme={["#AAAAAA", "#FFFFFF", "#555555"]}
          height="700px"
        >
          <LeadSlate name="Pranav Chandak" />
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/watch?v=1s48dkikK54"
          >
            <LeadSlate
              className=" col-span-2"
              name="Tanmay Rokde"
              phone="+91 91792 66570"
            />
          </Link>

          <Link
            className=" col-span-2"
            to="https://www.youtube.com/watch?v=vXamiwm7XKM"
          >
            <LeadSlate name="Saket Sanadhya" phone="+91 6377 121 184" />
          </Link>

          <CoLeadSlate name="Soham" />
          <CoLeadSlate name="Tushar Pandole" />
          <CoLeadSlate name="Imtiyaz Khan" />
        </TitleCard>
        <TitleCard
          title="Hospitality"
          theme={["#0F971C", "#0F8019", "#0D3A11"]}
        >
          <LeadSlate name="Siddh Jain" phone="+91 72064 98895" />
          <LeadSlate name="Krishna" phone="+91 87882 68288" />
          <CoLeadSlate name="Nishchint Kamath" />
          <CoLeadSlate name="Gaurav Bajpai" />
        </TitleCard>
        <TitleCard title="Security" theme={["#FD4556", "#BD3944", "#D62964"]}>
          <LeadSlate name="Yash Patidar" phone="+91 6376 540 711" />
          <CoLeadSlate name="Yash Natani" phone="+91 79873 86670" />
        </TitleCard>
      </CardSection>
      <CardSection start={0} end={500}>
        <TitleCard title="Corporate" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/shorts/1NFT6EODYHM"
          >
            <LeadSlate name="Deepak Chauhan " phone="+91 91402 64090" />
          </Link>

          <CoLeadSlate name="Vraj Talati" phone="+91 97125 68699" />
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/watch?v=p3OUFMpT7B0"
          >
            <CoLeadSlate name="Harsh Bajaj" phone="+91 84475 37313" />
          </Link>
        </TitleCard>
        <TitleCard title="Web Dev" theme={["#90e0ef", "#00b4d8", "#0077b6"]}>
          <LeadSlate name="Jayvardhan Patil" />
          <CoLeadSlate name="Aryan Singh" />
          <CoLeadSlate name="Kunal Sharma" />
        </TitleCard>
        <TitleCard title="Design" theme={["#7b1fa2", "#673ab7", "#f48fb1"]}>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/shorts/tSVvyI-bgO8"
          >
            <LeadSlate name="Sumit Shee" />
          </Link>

          <CoLeadSlate name="Piyush Waje" />
          <CoLeadSlate name="Anuj Kumar" />
        </TitleCard>

        <TitleCard
          title="Photography"
          theme={["#AAAAAA", "#FFFFFF", "#555555"]}
        >
          <LeadSlate name="Anuj Jain" />
          <LeadSlate name="Vinay Badlani" />
          <CoLeadSlate name="Akshit Gangwar " />
        </TitleCard>
      </CardSection>
      <CardSection start={0} end={1570}>
        <TitleCard title="Marketing" theme={["#FD4556", "#BD3944", "#D62964"]}>
          <LeadSlate name="Anjalika" />

          <CoLeadSlate name="Vaibhav Taywade " />
          <CoLeadSlate name="Akhil Daver" />
          <CoLeadSlate name="Yeshwant " />
          <CoLeadSlate name="Sankeerth Kankati" />
        </TitleCard>
        <TitleCard title="Content" theme={["#90e0ef", "#00b4d8", "#0077b6"]}>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/shorts/ymH_H_GD9Jg"
          >
            <LeadSlate name="Suyash Mahajan " />
          </Link>

          <CoLeadSlate name="Ayush Patil" />
          <CoLeadSlate name="Jignesh Patil " />
          <CoLeadSlate name="Hemant" />
        </TitleCard>
        <TitleCard title="Decor" theme={["#ffbe0b", "#fb5607", "#fcbf49"]}>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/shorts/NjluT7DDr7Y"
          >
            <LeadSlate name="Shrived Tadas" />
          </Link>

          <CoLeadSlate name="Pranav Sonar" />
          <CoLeadSlate name="Samruddhi " />
          <CoLeadSlate name="Pallavi Vasuniya " />
        </TitleCard>
        <TitleCard
          title="Mentors"
          height="200px"
          theme={["#90e0ef", "#00b4d8", "#0077b6"]}
        >
          <Link className=" col-span-2" to="/team/OOPs">
            <LeadSlate name="Dr. Pooja Jain" title="Faculty Coordinator" />
          </Link>
        </TitleCard>
        <TitleCard
          title="Organizers"
          height="750px"
          theme={["#0F971C", "#0F8019", "#0D3A11"]}
        >
          <LeadSlate name="Rohan Udhwani" title="General Secretary" />
          <LeadSlate name="Aman Sahu" title="Joint Secretary" />
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/watch?v=Uo9Hze_C768"
          >
            <LeadSlate name="Kumar Rishav " title="Technical Secretary" />
          </Link>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/watch?v=3p-Msory8fU"
          >
            <LeadSlate name="Priyanshu Chhabda" title="Discipline Secretary" />
          </Link>
          <Link
            className=" col-span-2"
            to="https://www.youtube.com/shorts/81wmS4IOgzI"
          >
            <CoLeadSlate name="Bino Manjesh" title="Technical Coordinator" />
          </Link>

          <CoLeadSlate name="Harsh Patwar" title="Discipline Coordinator" />
        </TitleCard>
      </CardSection>
    </motion.div>
  );
};

export default page;
