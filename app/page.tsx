import { getServerSession } from "next-auth";
import Login from "./components/login";
import UserInfo from "./components/UserInfo";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Login />
      <h1>User Information Client</h1>
      <UserInfo />
      <p>Server Side client Information</p>
      {JSON.stringify(session)}
    </div>
  );
}
