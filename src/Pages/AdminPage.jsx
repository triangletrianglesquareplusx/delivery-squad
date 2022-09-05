import { useSelector } from "react-redux";
//import auth from "../Firebase/firebase-config";

function AdminPage() {
  const email = useSelector((state) => state.user.email);

  return (
    <div className="h-screen m-10">
      <p>
        You have authenticated! Welcome to your admin page
        {/*<span className="text-regalBlue"> {auth.currentUser.email}</span>*/}
      </p>
    </div>
  );
}

export default AdminPage;
