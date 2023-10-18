import { IconGift } from "@tabler/icons-react";
import { IconPencil, IconTrash } from "@tabler/icons-react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-md grid gap-3">
      <h2 className="border-b-2 text-[#0F0F2D] text-xl font-medium">
        {userInfo.first_name} {userInfo.last_name}
      </h2>
      <ul className="grid gap-1 border-b-2">
        <li className="text-[#D3D3D3]">Correo</li>
        <li>{userInfo.email}</li>
        <li className="text-[#D3D3D3]">Cumpleaños</li>
        <li className="flex justify-start">
          <IconGift className="w-[19px] h-[19px]" /> {userInfo.birthday}
        </li>
      </ul>
      <div className="flex justify-end gap-2">
        <button
          onClick={() => deleteUser(userInfo.id)}
          className="bg-[#D93F3F]/80 text-white rounded-lg w-[43px] h-[43px] flex justify-center items-center"
        >
          <IconTrash />
        </button>
        <button className="bg-[#BDBDBD]/30 text-slate-300 rounded-lg w-[43px] h-[43px] flex justify-center items-center">
          <IconPencil onClick={() => handleClickUpdate(userInfo)} />
        </button>
      </div>
    </article>
  );
};
export default User;
