import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Footer = () => {
  return (
    <div className="flex flex-col items-start mt-auto px-6 pt-6 border-t border-[#E5E5E5] text-sm text-gray-600">
      <Avatar>
        <AvatarImage src="/sidebar-avatar.png" />
        <AvatarFallback>Avatar</AvatarFallback>
      </Avatar>
      <h3 className="mt-2 font-semibold text-sm text-black">Sam Wheeler</h3>
      <p className="opacity-50 text-xs font-normal">samwheeler@example.com</p>
    </div>
  );
};

export default Footer;
