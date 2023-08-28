import "../Css/AboutMe.css";
export default function AboutMe() {
  return (
    <div>
      <div className="row bg-light justify-content-center m-1">
        <div className="col-sm-12 col-md-3 align-self-center">
          <p className="myp ">About Me</p>
        </div>
        <div className="col-sm-12 col-md-8">
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            sit sed nulla ipsam? Voluptates est soluta obcaecati odio commodi
            aliquam voluptatum rerum nemo, recusandae, odit sint fuga magnam,
            officiis alias. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Minus provident fugit eligendi voluptatum sequi quaerat
            cupiditate dignissimos atque. Fugit minima adipisci asperiores
            maxime blanditiis similique quia numquam et maiores aspernatur.
          </p>
          <br />
          <a
            className="do1"
            href="https://drive.usercontent.google.com/download?id=1SvGUODwT5TBkzs9fXAHegq0VT7AFkKDM&export=download&authuser=0&confirm=t&uuid=9eaa115b-2957-4241-8c28-c2d418b82547&at=APZUnTWSk5rGTRgviqWzMB9F9CD5:1693209044243"
            download="downloaded-file-name.csv"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
