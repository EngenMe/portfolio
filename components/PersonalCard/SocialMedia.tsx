import { socialMedias } from "@/data/socialMedias.data";
import SocialMediaItem from "./SocialMediaItem";

const SocialMedia = () => {
  return (
    <div className="flex gap-6 pt-10">
      {socialMedias.map((item, index) => (
        <SocialMediaItem
          key={index}
          icon={item.icon}
          url={item.url}
          inLightModeColor={item.inLightModeColor}
          inDarkModeColor={item.inDarkModeColor}
        />
      ))}
    </div>
  );
};
export default SocialMedia;
