import React, { useState } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      email,
      password,
      passwordRepeat,
      remember
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <p className="mb-4">Please fill in this form to create an account.</p>
        <hr className="mb-4" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="psw-repeat" className="block text-gray-700 font-bold mb-2">Repeat Password</label>
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              required
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="form-checkbox"
                name="remember"
                style={{ marginBottom: '15px' }}
              />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>
          <p className="mb-4">By creating an account you agree to our <a href="#" className="text-blue-500">Terms & Privacy</a>.</p>
          <div className="flex justify-between">
            <button type="button" className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
