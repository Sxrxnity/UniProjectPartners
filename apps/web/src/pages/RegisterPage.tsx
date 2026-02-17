export function RegisterPage() {
  return (
    <section>
      <h1>Create your account</h1>
      <p>Simple registration form will go here.</p>
      <form className="card">
        <label>
          University email
          <input type="email" placeholder="you@university.edu" />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </section>
  );
}

