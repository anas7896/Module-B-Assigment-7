import React, { useState } from 'react';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {isLogin ? (
        <div className={styles.form}>
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>
            Don't have an account? <span onClick={switchModeHandler}>Sign Up</span>
          </p>
        </div>
      ) : (
        <div className={styles.form}>
          <h2>Sign Up</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Sign Up</button>
          <p>
            Already have an account? <span onClick={switchModeHandler}>Login</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
