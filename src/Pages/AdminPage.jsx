import { getAuth, updateProfile } from "firebase/auth";
import ControlButton from "../Utilities/ControlButton";
import { updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";
import { useForm } from "react-hook-form";

function AdminPage() {
  const auth = getAuth();
  const { register, handleSubmit, setValue } = useForm();
  setValue("displayName", "Bobby");

  const updateAllProfileFields = () => {
    console.log("handled");
  };

  return (
    <div className="h-screen m-10">
      <header className="flex items-center justify-between">
        <p>
          You have authenticated! Welcome to your admin page{" "}
          <span className="text-regalBlue">{auth.currentUser.email}</span>
        </p>
      </header>
      <main>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(updateAllProfileFields)}
        >
          <label>Current display name</label>
          <input
            {...register("displayName")}
            type="text"
            className="w-2/12 p-2 bg-blue-200 rounded-lg outline-none"
          />
          <ControlButton
            name="Update"
            className="w-1/12 px-6 py-3 text-white bg-blue-400 rounded-md shadow-xl hover:bg-blue-600"
          />
        </form>
      </main>
    </div>
  );
}

export default AdminPage;
