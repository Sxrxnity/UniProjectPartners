export function ProfileEditPage() {
  return (
    <section>
      <h1>Edit profile</h1>
      <p>Stubbed profile editor for your MVP.</p>
      <form className="card">
        <label>
          Display name
          <input type="text" />
        </label>
        <label>
          Degree
          <input type="text" />
        </label>
        <label>
          Interests
          <textarea rows={3} />
        </label>
        <button type="submit">Save profile</button>
      </form>
    </section>
  );
}

