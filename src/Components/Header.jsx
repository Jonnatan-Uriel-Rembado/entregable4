import { IconPlus } from "@tabler/icons-react";

// eslint-disable-next-line react/prop-types
const Header = ({ handleOpenModal }) => {
  return (
    <header className="flex justify-between p-10">
      <h1 className="text-[#0F0F2D] text-3xl font-bold">Usuarios</h1>
      <button
        onClick={handleOpenModal}
        className="flex justify-between bg-[#555A88] text-white p-2"
      >
        <IconPlus /> Crear Nuevo Usuario
      </button>
    </header>
  );
};
export default Header;
