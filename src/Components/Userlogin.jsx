import MainMenu from "./MainMenu";

function Userlogin(props)
{
  if (props.name == "Shubham" && props.password == "mamdi")
  {
    return <MainMenu></MainMenu>
  }
  else
  {
    return <h2>Please Login</h2>;
  }
}

export default Userlogin;