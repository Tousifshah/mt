import React, { useState } from "react";
import sym from '../../pics/sym.jpg';
import pre from '../../pics/pre.png';

import { AppBar, Toolbar, Typography, Button, } from "@material-ui/core";
import Modal from "react-modal";
import "./Navbar.css";
function Navbar() {
  const [symptoms, setsymptoms] = useState(false);
  const [precautions, setprecautions] = useState(false);
  const [help, sethelp] = useState(false);

  return (
    <div className="navbar">
      <AppBar

        position="static"
        style={{
          backgroundColor: "#00143d",
          color: "white",
          borderRadius: "15px",
        }}
      >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 10, fontSize: 30, fontWeight: 800, }}>
                COVID-19 Tracker app by Namrah Siddiqua     </Typography>
          <Button onClick={() => setsymptoms(true)} style={{ backgroundColor: '#448e9e' }}>Symptoms</Button>
          <Button onClick={() => setprecautions(true)} style={{ backgroundColor: '#448e9e' }}>Precautions</Button>
          <Button onClick={() => sethelp(true)} style={{ backgroundColor: '#448e9e' }}>HelpLine</Button>
        </Toolbar>
      </AppBar>

      <Modal
        isOpen={symptoms}
        onRequestClose={() => setsymptoms(!true)}
        style={{
          overlay: {
            position: "fixed",
   
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }, alignItems: 'center',

          content: {
            position: "absolute",
            top: "10px",
            left: "350px",
            right: "350px",
            bottom: "10px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px",
          },
          
        }}
      >
        <h2>Symptoms</h2>
            <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.
                Most common symptoms:
                <li>fever</li>
                <li> dry cough </li>
                <li> tiredness </li> </p>
        <img className="symimage" src={sym} alt='symptoms' width="50%" height="600"/>
        <div>
          <button
            onClick={() => setsymptoms(!true)}
            style={{
              backgroundColor: "#a32947",
              fontWeight:600,
              padding: "10px",
              borderRadius: "5px",
              marginLeft: "20px"
            }}
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={precautions}
        onRequestClose={() => setprecautions(!true)}
        style={{
          overlay: {
            position: "fixed",
   
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }, alignItems: 'center',

          content: {
            position: "absolute",
            top: "10px",
            left: "350px",
            right: "350px",
            bottom: "10px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px",
          },
          
        }}
      >
        <h2>Precautions </h2>
        <p>Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.
            To prevent the spread of COVID-19:
            <li>Clean your hands often. Use soap and water, or an alcohol-based hand rub.</li>
            <li>Maintain a safe distance from anyone who is coughing or sneezing.</li>
            <li>Wear a mask when physical distancing is not possible.</li>
            <li>Don’t touch your eyes, nose or mouth.</li>
            <li>Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.</li>
            <li>Stay home if you feel unwell.</li>
            <li>If you have a fever, cough and difficulty breathing, seek medical attention.</li></p>
        <img className="preimage" src={pre} alt='precautions' />
        <div>
          <button
            onClick={() => setprecautions(!true)}
            style={{
              backgroundColor: "#a32947",
              fontWeight:600,
              padding: "10px",
              borderRadius: "5px",
              marginLeft: "20px"
            }}
          >
            Close
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={help}
        onRequestClose={() => sethelp(!true)}
        style={{
          overlay: {
            position: "fixed",
   
            backgroundColor: "rgba(255, 255, 255, 0.75)",
          }, alignItems: 'center',

          content: {
            position: "absolute",
            top: "10px",
            left: "350px",
            right: "350px",
            bottom: "10px",
            border: "1px solid #ccc",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "15px",
            outline: "none",
            padding: "20px",
          },
          
        }}
      >
        <h2>Contact</h2>
            <p><ul> <h3>WHO Headquarters in Geneva </h3></ul>
                <ul> Avenue Appia 20</ul>
                <ul> 1211 Geneva</ul>
                <ul> Telephone: +41-22-7912111</ul>
                <ul>Whatsapp: +41-79-893-18-92</ul>
                <ul>url: https://www.who.int/emergencies/diseases/novel-coronavirus-2019</ul></p>
            <br/>
            <p><ul> <h3>Ministry of National Health Services Regulations & Coordination Pakistan</h3></ul>
               <ul>Ministry of National Health Services Regulations & Coordination,</ul>
               <ul> 3rd Floor Kohsar Block,</ul>
               <ul> Islamabad</ul>
               <ul> Telephone: +92-51-9245746</ul>
               <ul> url: http://covid.gov.pk/</ul>
               <ul> email: contact@nhsrc.gov.pk</ul></p>
        <div>
          <button
            onClick={() => sethelp(!true)}
            style={{
              backgroundColor: "#a32947",
              fontWeight:600,
              padding: "10px",
              borderRadius: "5px",
              marginLeft: "20px"
            }}
          >
            Close
          </button>
        </div>
      </Modal>

    </div>
  );
}

export default Navbar;