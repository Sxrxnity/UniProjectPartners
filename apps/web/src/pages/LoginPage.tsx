export function LoginPage() {
  return (
    <section>
      <h1>Welcome back</h1>
      <p>Log in to see your conversations and student matches.</p>
      <form className="card">
        <label>
          Email
          <input type="email" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </section>
  );
}

