import Container from "react-bootstrap/Container";
import { BASE_URL } from "../../../constants/api";
import BackArrow from "../../../components/utility/BackArrow";
import EditEstablishment from "../../../components/admin/establishment/EditEstablishment";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";

export default function Establishment({ establishment, ctx }) {
  const token = parseCookies(ctx).token;
  const router = useRouter();

  if (token) {
    return (
      <Container>
        <BackArrow />
        <Container>
          <EditEstablishment {...establishment} />
        </Container>
      </Container>
    );
  } else router.push("/");
  router.reload();
}

//Fetch data on each request.
export async function getServerSideProps({ params: { name } }) {
  //fetch establishemnt that matches the param: name value ->
  const establishment_res = await fetch(
    `${BASE_URL}/establishments/?name=${name}`
  );
  const specificEstablishment = await establishment_res.json();

  return {
    props: {
      establishment: specificEstablishment[0],
    },
  };
}

//Fetch path ->
export async function getServerSidePaths() {
  const establishments_res = await fetch(`${BASE_URL}/establishments`);
  const establishments = await establishments_res.json();
  return {
    //create params to be used in getServerSideProps ->
    paths: establishments.map((establishment) => ({
      //Stringify the value ->
      params: { name: String(establishment.name) },
    })),

    fallback: true,
  };
}
