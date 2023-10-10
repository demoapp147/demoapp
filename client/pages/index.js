import {Title} from "../helpers/use-title";
import axios from "axios";
import {useState} from "react";
export default function Home() {
  const [hello, setHello] = useState(null);
  const onClick = async () => {
      const {data} = await axios.get('http://localhost:5000/api/hello-world');
      setHello(data)
      console.log(data)
  };
  return (
    <>
      <Title
        title="APPDEMO - frontend."
        content="this is a demo app."
      />
      <div className="container mt-4">
        <div className="margin-top-20 mt-4">
        <h3>This is a demo app.</h3>
        </div>
        <button
          type="submit"
          className="btn rounded btn-success"
          onClick={onClick}
                    >Say Hello</button>
          {hello && <h3>{hello}</h3> }
      </div>
    </>
  );
}
