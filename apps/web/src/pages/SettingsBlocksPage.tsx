export function SettingsBlocksPage() {
  const mockBlocks = [
    { id: 1, name: "Spammer123" },
    { id: 2, name: "OffTopicUser" }
  ];

  return (
    <section>
      <h1>Blocked users</h1>
      <p>Manage who can contact you.</p>
      <ul className="list">
        {mockBlocks.map((b) => (
          <li key={b.id} className="card">
            {b.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

