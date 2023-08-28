import "../Css/Skills.css";
import ProgressBar from "react-bootstrap/ProgressBar";
const now = 60;

export function DynamicPro(props) {
  return (
    <div className="container">
      <div className="row my-3">
        <b className="col-4 myp5">{props.text}</b>
        <ProgressBar
          now={props.progress}
          label={`${now}%`}
          visuallyHidden
          variant="custom"
          className="progress col-8 mypro"
        />
      </div>
    </div>
  );
}
export default function Skills() {
  return (
    <div style={{ backgroundColor: "#3d3d3d" }} className="mysk m-3">
      <div>
        <br />
        <p style={{ fontSize: "30px" }}>Skills</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum corrupti
          distinctio voluptas fugit ducimus quam recusandae quae, dignissimos
          dolores tenetur? Aut officia totam fugit nihil tempora, maxime
          excepturi suscipit placeat. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Culpa, praesentium, sit esse repellendus delectus
          optio veritatis, id distinctio iure sequi doloribus eligendi
          asperiores? Ex numquam quia molestias? Aspernatur, adipisci corporis.
        </p>
      </div>
      <div className="row">
        <div
          className="col-sm-5 mdsk2 align-self-center"
          style={{ zoom: "4s" }}
        >
          <div>
            <p className="tc">My Foucs</p>
           
            <hr className="custom-hr" /></div>
            <br />
          <p className="tc2"> 
          <p>UI/UX Design</p>
          <p>Responsive Design</p>
          <p>Web Design</p>
          <p>Mobile Application Design</p></p>
        </div>
        <div className="col-sm-6">
          <DynamicPro text={"Html 5"} progress={90}></DynamicPro>
          <DynamicPro text={"CSS3"} progress={90}></DynamicPro>
          <DynamicPro text={"Java Script"} progress={70}></DynamicPro>
          <DynamicPro text={"Bootstrap"} progress={70}></DynamicPro>
          <DynamicPro text={"SASS"} progress={90}></DynamicPro>
          <DynamicPro text={"React"} progress={80}></DynamicPro>
          <DynamicPro text={"Node.js"} progress={60}></DynamicPro>
          <DynamicPro text={"Express.js"} progress={50}></DynamicPro>
        </div>
      </div>
      <br />
    </div>
  );
}
