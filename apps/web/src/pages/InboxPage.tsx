export function InboxPage() {
  const mockConversations = [
    { id: 1, name: "Alex - AI side project" },
    { id: 2, name: "Sam - Design collab" }
  ];

  return (
    <section>
      <h1>Inbox</h1>
      <p>Your current conversations.</p>
      <ul className="list">
        {mockConversations.map((c) => (
          <li key={c.id} className="card">
            {c.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

