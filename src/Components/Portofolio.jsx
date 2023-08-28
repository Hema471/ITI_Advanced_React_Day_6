import "../Css/Portofolio.css";

export function MyP() {
  return <p className="MyP m-5">Portofolio</p>;
}
export default function Portofolio(props) {
  return (
    <div>
      <button className="myu" style={{ backgroundColor: props.bg  }}>
        <p>{props.text}</p>
        <hr className="custom-hr" />
      </button>
      <br /> <br />
    </div>
  );
}


export function WithoutHR(props){
  return (
    <div>
      <button className="myu" style={{ backgroundColor: props.bg  }}>
        <p>{props.text}</p>
      </button>
      <br /> <br />
    </div>
  );
}
