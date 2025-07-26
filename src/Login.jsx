import { useGlobalContext } from "./appcontext";

const Login = () => {
  const { isLogin } = useGlobalContext();

  return (
    <section className="login-container">
      {isLogin ? (
        <div className="header">
          <p>Hello Nam</p>
          <button className="logout-btn">Thoát</button>
        </div>
      ) : (
        <div className="header">
          <button className="login-btn">Đăng nhập</button>
          <button className="register-btn">Đăng ký</button>
        </div>
      )}
    </section>
  );
};
export default Login;
