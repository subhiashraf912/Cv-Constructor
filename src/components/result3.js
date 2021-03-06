

import React, { Component } from "react";
import Firebase from "./database";
import './main.css'
class Result3 extends Component {
  state = {};
  componentDidMount() {
    var key = this.props.match.params.key;

    Firebase.database()
      .ref("CV/" + key)
      .on("value", list => {
        var object = list.val();
        var name = object.Name;
        var address = object.Address;
        var PT = object.PT;
        var PhoneNumber = object.PN;
        var Gmail = object.Gmail;
        var Major = object.Major;
        var NameOfUniversity = object.NOU;
        var Degree = object.Degree;
        var Skills = object.Skills;
        var Profile = object.Profile;
        var WE = object.WE;
        var JT = object.JT;
        var In = object.In;
        var ProfileP = object.profileP;

        this.setState({
          name: name,
          address: address,
          PT: PT,
          PhoneNumber: PhoneNumber,
          Gmail: Gmail,
          Major: Major,
          NameOfUniversity: NameOfUniversity,
          Degree: Degree,
          Skills: Skills,
          Profile: Profile,
          WE: WE,
          JT: JT,
          In: In,
          avatar: ProfileP
        });
      });
  }
  render() {
    return (
      <div className="template3MainDiv">


        <div className='template3SecondaryDiv' >
          <img className="dev_logoT2" src={this.state.avatar} />

          <h1 className='template3MainDivElmnts'>{this.state.name}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.address}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.PhoneNumber}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.Gmail}</h1>
          <hr />
          <h1 className='template3MainDivElmnts'>{this.state.In}</h1>


        </div>


        <div className='template3MainDivElmnts'>


          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Proffesional title</p>
              <h5>{this.state.PT} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <h5>{this.state.Major} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Name of university</p>
              <h5>{this.state.NameOfUniversity} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Degrees</p>
              <h5>{this.state.Degree} </h5>
            </div>
          </div>
          <div className="AllCvs">
            <div className="CvElmnt">
              <p className="Cv_title">Major</p>
              <h5>{this.state.Major} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Skills</p>
              <h5>{this.state.Skills} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Work experiance</p>
              <h5>{this.state.WE} </h5>
            </div>

            <div className="CvElmnt">
              <p className="Cv_title">Jop title</p>

              <h5>{this.state.JT} </h5>
            </div>
          </div>

        </div>



      </div>
    );
  }
}
export default Result3;