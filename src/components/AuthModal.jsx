import Login from "./Login";
import Signup from "./Signup";

function AuthModal({ openModal, setOpenModal }) {
  if (!openModal) return null;

  return (
    <>
      {openModal === "login" && (
        <Login close={() => setOpenModal(null)} />
      )}

      {openModal === "signup" && (
        <Signup openLogin={() => setOpenModal("login")} />
      )}
    </>
  );
}

export default AuthModal;
