import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const SocialMediaLinks = [
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: <FaFacebook size={22} />,
  },
  {
    href: "https://www.twitter.com",
    label: "Twitter",
    icon: <FaTwitter size={22} />,
  },
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: <FaInstagram size={22} />,
  },
];
function SocialMediaIcons({ direction }) {
  return (
    <div
      className={`hidden lg:flex gap-5 h-full ${
        direction && direction
      }  items-center text-gray-800`}
    >
      {SocialMediaLinks.map((item, i) => (
        <a key={i} href={item.href}>
          {" "}
          {item.icon}{" "}
        </a>
      ))}
    </div>
  );
}

export default SocialMediaIcons;
