
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around mt-7 bg-[#070910] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          kishanwali16@gmail.com
        </li>
        <a href="https://www.linkedin.com/in/kishanwali/">
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkdlin.com/kishan
        </li>
        </a>
        <a href="https://github.com/Nahsik16">
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/Nahsik16
        </li>
        </a>
      </ul>
    </div>
  )
}

export default Footer