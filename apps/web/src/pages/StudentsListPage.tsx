export function StudentsListPage() {
  const mockStudents = [
    { id: 1, name: "Alex", degree: "Computer Science" },
    { id: 2, name: "Sam", degree: "Design" },
    { id: 3, name: "Jordan", degree: "Engineering" }
  ];

  return (
    <section>
      <h1>Students</h1>
      <p>Browse potential project partners.</p>
      <ul className="list">
        {mockStudents.map((s) => (
          <li key={s.id} className="card">
            <strong>{s.name}</strong>
            <span>{s.degree}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

