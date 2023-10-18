import { IconLetterX } from "@tabler/icons-react";
import {
  EMAIL_VALIDATIONS,
  REQUIRED_VALIDATION,
} from "../Constants/formValidations";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-100 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="relative bg-[#FFFFFF] w-[min(100%,_419px)] h-[731px] grid items-center justify-center"
      >
        <h2 className="font-bold text-3xl text-[#0F0F2D]">
          {idUserToEdit ? "Editar Usuario" : "Nuevo Usuario"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="absolute w-[24px] h-[24px] top-4 right-4 hover:bg-slate-300"
        >
          <IconLetterX />
        </button>
        <div className="grid gap-1">
          <label className="font-semibold px-3" htmlFor="first_name">
            Nombre
          </label>
          <input
            placeholder="Nombre"
            className="bg-[#F9FAFC] border border-black border-opacity-20 rounded-md w-[355px] h-[45px] p-3"
            id="first_name"
            type="text"
            {...register("first_name", REQUIRED_VALIDATION)}
          />
          {errors.first_name && (
            <span className="text-xs text-red-500">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-semibold px-3" htmlFor="last_name">
            Apellido
          </label>
          <input
            placeholder="Apellido"
            className="bg-[#F9FAFC] border border-black border-opacity-20 rounded-md w-[355px] h-[45px] p-3"
            id="last_name"
            type="text"
            {...register("last_name", REQUIRED_VALIDATION)}
          />
          {errors.last_name && (
            <span className="text-xs text-red-500">
              {errors.last_name.message}
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-semibold px-3" htmlFor="email">
            Correo
          </label>
          <input
            placeholder="Email"
            className="bg-[#F9FAFC] border border-black border-opacity-20 rounded-md w-[355px] h-[45px] p-3"
            id="email"
            type="text"
            {...register("email", EMAIL_VALIDATIONS)}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-semibold px-3" htmlFor="password">
            Contraseña
          </label>
          <input
            placeholder="Contraseña"
            className="bg-[#F9FAFC] border border-black border-opacity-20 rounded-md w-[355px] h-[45px] p-3"
            id="password"
            type="text"
            {...register("password", REQUIRED_VALIDATION)}
          />
          {errors.password && (
            <span className="text-xs text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-semibold px-3" htmlFor="birthday">
            Fecha de Nacimiento
          </label>
          <input
            className="bg-[#F9FAFC] border border-black border-opacity-20 rounded-md w-[355px] h-[45px] p-3"
            id="birthday"
            type="date"
            {...register("birthday", REQUIRED_VALIDATION)}
          />
          {errors.birthday && (
            <span className="text-xs text-red-500">
              {errors.birthday.message}
            </span>
          )}
        </div>
        <button className="bg-[#555A88] w-[355px] h-[45px] text-white font-bold">
          {idUserToEdit ? "Guardar Cambios" : "Agregar Nuevo Usuario"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
