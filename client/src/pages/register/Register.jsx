import './register.scss'

const Register = () => {
  return (
    <div className="register">
       <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            modi praesentium explicabo doloribus corporis amet, dignissimos enim
            dolor officia quae laborum adipisci labore odio ducimus ratione
            tempora, itaque fuga quasi!
          </p>
          <span>Dont you have an account.</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
