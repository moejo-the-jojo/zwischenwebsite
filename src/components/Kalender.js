// https://fullcalendar.io/docs
import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { NavLink } from "react-router-dom";

const Calendar = () => {
  React.useEffect(() => {}, []);

  const handleEventEnter = (arg) => {
    if (!document.getElementById("displayEvent")) {
      const topOffset = arg.el.getBoundingClientRect().x,
        leftOffset = arg.el.getBoundingClientRect().y;
      const displayEvent = document.createElement("div");
      displayEvent.id = "displayEvent";
      displayEvent.style.position = "absolute";
      displayEvent.style.top = `${leftOffset - 100}px`;
      displayEvent.style.left = `${topOffset + 200}px`;
      displayEvent.style.height = "50px";
      displayEvent.style.width = "30vw";
      displayEvent.innerHTML =
        arg.event.extendedProps["description"] + "<br />";
      displayEvent.style.color = "black";
      displayEvent.style.backgroundColor = "LightGray";
      displayEvent.style.borderStyle = "solid";
      displayEvent.style.borderWidth = "2px";
      displayEvent.style.borderColor = "black";
      displayEvent.style.zIndex = "9999";
      displayEvent.style.textAlign = "center";
      displayEvent.style.lineHeight = "50px";
      displayEvent.style.verticalAlign = "center";

      displayEvent.addEventListener("mousedown", () => {
        document.body.removeChild(document.getElementById("displayEvent"));
      });

      document.body.appendChild(displayEvent);
    }
    console.log(arg);
  };

  const handleEventLeave = (arg) => {
    console.log("i left " + arg.event.el);
    // document.body.removeChild(document.getElementById("displayEvent"));
  };

  return (
    // Liste von Shows links im Bild??
    <div className="contentContainer">
      <div
        id="kalenderContainer"
        className="content"
        style={{ gridArea: "1 / 3 / 1 / 1" }}
      >
        <h1 style={{ textAlign: "center" }}>Show-Termine</h1>
        <FullCalendar
          // id="mahKalender"
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          selectable={true}
          unselectAuto={true}
          eventMouseEnter={handleEventEnter}
          eventMouseLeave={handleEventLeave}
          eventClassNames="calenderEvents"
          eventColor="black"
          firstDay={1}
          events={[
            {
              id: "Armando",
              title: "Armando",
              date: "2023-08-01",
              extendedProps: {
                description: "We were playing Amando, we had se fun and stuff",
              },
            },
            {
              id: "Armando Le 2nd",
              title: "Armando Le 2nd",
              date: "2023-11-14",
              extendedProps: {
                description: "The next awesome Armando",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
