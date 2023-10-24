import chu from "../assets/chu.png";
import ho from "../assets/ho.jpg";
import horn from "../assets/horn.jpg";
import Child from "./Child";

export default function Parent() {
  return (
    <>
      <h2>This the Parent</h2>
      <Child name="Billy" src={chu} />
      <Child name="Tilly" src={ho} />
      <Child name="Silly Billy" src={horn} />
    </>
  );
}
