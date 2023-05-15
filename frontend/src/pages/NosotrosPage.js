import React from "react";
import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) =>{
   return (
     <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Duis aliquet ornare convallis. Phasellus porta nunc non sapien facilisis semper. Ut auctor in nisl id ultrices. In finibus diam ac nisi facilisis pulvinar. Vestibulum magna ipsum, luctus ac diam non, pulvinar elementum sem. Maecenas vitae velit libero. Integer quam quam, pretium et mi vel, faucibus sollicitudin lectus. Phasellus lectus ex, pretium tempus maximus sed, auctor in orci. Curabitur ullamcorper vulputate enim, sed feugiat lacus imperdiet non. Vestibulum vitae efficitur nisl. Maecenas pharetra erat vitae sapien convallis, et ultricies nibh convallis. Nunc condimentum et dolor eu gravida. Integer eu nibh ac est sodales aliquet. Proin fermentum iaculis risus vel luctus. Mauris ut mi at purus tristique eleifend eu nec erat.</p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <div className="persona">
            <img src="images/nosotros.png" alt="Juan Gomez" />
            <h5>Juan Gomez</h5>
            <h6>Gerente General</h6>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="persona">
            <img src="images/nosotros2.png" alt="Jane Doe" />
            <h5>Jane Doe</h5>
            <h6>Asistente Comercial</h6>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="persona">
            <img src="images/nosotros3.png" alt="Maria Zarasa" />
            <h5>Maria Zarasa</h5>
            <h6>Logística</h6>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="persona">
            <img src="images/nosotros4.png" alt="Juan Gomez" />
            <h5>Elsa Bor de Lencuentro</h5>
            <h6>Atención al público</h6>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
     </main>
   );
}

export default NosotrosPage;