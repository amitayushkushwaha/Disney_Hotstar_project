import React from "react";
const a = {
  backgroundImg:
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg",
  description:
    "A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.",
  subTitle: "2018 • 7m • Family, Fantasy, Kids, Animation",
};
const g="<"
function Static() {
  return (
    <div className="static">
      <div className="landing_header">
        <img src="./images/logo.svg" alt="logo" />
        <p>Login</p>
      </div>
     <a href="home"><p className="static_go_home">{g} Go Home</p></a> 
      <div className="static_content">
       
        <div style={{display: 'flex'}}>
        <button style={{display: 'flex', alignItems: 'center',width: "9%" ,height: '2.5rem',marginRight: '10px',borderRadius: '5Px',border: 'none'}}
        >
          <img src="./images/black.png" alt="button" style={{height: "25px", width: "25px",marginRight: '7px'}}/>
          <p>Play</p>
        </button>
        <button style={{display: 'flex', alignItems: 'center',width: "9%" ,height: '2.5rem',color: 'white'}} className="sb">
          <img src="./images/white.png" alt="button" style={{height: "25px", width: "25px"}}/>
          <p>Trailer</p>
        </button>
        </div>

        <p className="title">{a.subTitle}</p>
        <p className="description">{a.description}</p>
      </div>
    </div>
  );
}
export default Static;
