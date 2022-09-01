import { useSelector } from "react-redux";

function AdminPage() {
  const email = useSelector((state) => state.user.email);
  return (
    <div className="h-screen m-10">
      <p>You have authenticated! Welcome to the admin page. {email}</p>
    </div>
  );
}

export default AdminPage;
