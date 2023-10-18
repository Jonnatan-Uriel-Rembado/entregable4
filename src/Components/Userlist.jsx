import User from "./User";

const Userlist = ({ users, deleteUser, handleClickUpdate }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_381px)] justify-center max-w-[1440px] mx-auto gap-10 py-10">
      {users.map((user) => (
        <User
          key={user.id}
          userInfo={user}
          deleteUser={deleteUser}
          handleClickUpdate={handleClickUpdate}
        />
      ))}
    </section>
  );
};
export default Userlist;
