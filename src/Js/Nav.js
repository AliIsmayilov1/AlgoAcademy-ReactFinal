import "../Css/Nav.css";

function Nav() {
  return (
    <>
      <div className="navContainer">
        <h4>WORKOUT</h4>
        <nav>
          <i class="fa-solid fa-bars"></i>
          <span>EXERCISES</span>
          <span>TRAINERS</span>
          <span>PRICING</span>
          <span>LOGIN</span>
        </nav>
      </div>
    </>
  );
}

export default Nav;
