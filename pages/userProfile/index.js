import axios from "axios";
import profileHandler from "../api/user/profile";
import fetchProfile from "../../pages/api/getData";

export default function userProfile({ userInfo }) {
  const thisUser = JSON.parse(userInfo);

  console.log("este es el usuario", thisUser);

  return (
    <>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const dataUser = await fetchProfile();

  const userInfo = JSON.stringify(dataUser);

  return { props: { userInfo } };
}
