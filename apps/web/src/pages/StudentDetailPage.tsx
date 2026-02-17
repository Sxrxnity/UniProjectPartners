import { useParams } from "react-router-dom";

export function StudentDetailPage() {
  const { id } = useParams();

  return (
    <section>
      <h1>Student profile</h1>
      <p>Details for student with id: {id}</p>
      <div className="card">
        <p>This is a placeholder for the full profile page.</p>
      </div>
    </section>
  );
}

