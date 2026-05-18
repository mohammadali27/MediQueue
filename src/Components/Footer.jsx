import { FaFacebook, FaTwitter, FaYoutubeSquare } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import MarqueeText from "react-marquee-text";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex justify-between container mx-auto p-10 ">
        <div className="">
          <p className="font-bold text-2xl">Quick Links</p>
          <ul>
            <li className="flex items-center">
              {" "}
              <FcCheckmark /> About Us
            </li>
          </ul>
          <ul>
            <li className="flex items-center">
              <FcCheckmark />
              Checkout
            </li>
          </ul>
          <ul>
            <li className="flex items-center">
              <FcCheckmark />
              FAQs
            </li>
          </ul>
        </div>
        <div className=" space-y-3">
          <p className="font-bold text-2xl">Social links</p>
          <div className="">
            <ul className="flex gap-5">
              <li className="">
                <FaFacebook size={30} />
              </li>
              <li>
                <FaTwitter size={30} />
              </li>
              <li>
                <FaYoutubeSquare size={30} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-5">
             <MarqueeText direction='right' duration={20} pauseOnHover>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laboriosam expedita, illo itaque nemo, dolorum quos magnam qui inventore rerum rem nam. Nihil a pariatur hic facilis tempora necessitatibus sequi culpa praesentium veritatis neque fuga non illo, reiciendis corporis quae enim soluta rerum laboriosam ratione, possimus cupiditate distinctio. Corrupti quas perferendis vero, tempora nemo, deserunt illo laborum enim rerum quibusdam aliquid, officia neque! Eos corporis suscipit libero quod sapiente praesentium culpa dolorem dolores et? Modi doloremque totam perspiciatis ullam, beatae maxime eum blanditiis odit omnis alias quod id reiciendis, nihil eveniet aliquam non enim? Quidem consequuntur asperiores iste aperiam mollitia, eius repellendus velit deleniti perferendis dolorum facilis nobis totam vitae nostrum corporis optio quas impedit aspernatur animi officiis. Quae cupiditate impedit omnis error vero, voluptates fuga repudiandae. Fugiat quis dignissimos aliquid sint? Nulla cumque quia aut vitae? Recusandae possimus velit voluptate exercitationem tempora deserunt. Error, culpa. Deleniti dicta esse eos.
             </MarqueeText>
        </h1>
        <p>{new Date().getFullYear()} . All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
