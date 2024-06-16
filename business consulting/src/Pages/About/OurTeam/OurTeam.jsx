import { useQuery } from "@apollo/client"
import { GET_EXPERTS } from "../../../GraphQL/Queries"

const OurTeam = () => {
    const { data: expertsData, loading, error } = useQuery(GET_EXPERTS)
    if (expertsData) console.log("expertData: " , expertsData)

  return (
    <div className="OurTeam flex w-screen flex-col items-center justify-center bg-primary text-second"></div>
  );
};

export default OurTeam;
