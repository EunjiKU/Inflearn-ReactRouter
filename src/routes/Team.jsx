import { useParams, useSearchParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  return (
    <div>
      <h3>Team: {teamId}</h3>
      {message && <h4>{message}</h4>}
    </div>
  )
}