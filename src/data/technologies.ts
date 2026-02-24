import { FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaAws, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiC, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiLinux, SiAmazons3, SiAmazondynamodb, SiArduino, SiPostman, SiIntellijidea, SiJsonwebtokens, SiEspressif } from "react-icons/si";
import { TbApi, TbCloudComputing, TbBrandVscode } from "react-icons/tb";

export const technologies = [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "C", icon: SiC, color: "text-blue-600" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
    { name: "Firestore", icon: SiFirebase, color: "text-orange-400" },
    { name: "Linux", icon: SiLinux, color: "text-yellow-400" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "EC2", icon: FaAws, color: "text-orange-400" }, // Using general AWS icon
    { name: "S3", icon: SiAmazons3, color: "text-red-500" },
    { name: "Lambda", icon: FaAws, color: "text-orange-500" }, // Using general AWS icon
    { name: "DynamoDB", icon: SiAmazondynamodb, color: "text-blue-600" },
    { name: "CloudFormation", icon: FaAws, color: "text-pink-500" }, // Using general AWS icon
    { name: "REST API", icon: TbApi, color: "text-green-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "GitHub", icon: FaGithub, color: "text-white" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "VS Code", icon: TbBrandVscode, color: "text-blue-400" },
    { name: "IntelliJ", icon: SiIntellijidea, color: "text-purple-500" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-pink-500" },
    { name: "MERN Stack", icon: FaReact, color: "text-cyan-400" },
    { name: "IoT", icon: TbCloudComputing, color: "text-blue-300" },
    { name: "ESP8266", icon: SiEspressif, color: "text-red-500" },
    { name: "Arduino", icon: SiArduino, color: "text-teal-500" }
];
