// https://fullcalendar.io/docs
import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  React.useEffect(() => {}, []);

  const handleEventEnter = (info) => {
    info.el.style.backgroundColor = "#2c3e50";
  };

  const handleEventLeave = (info) => {
    info.el.style.backgroundColor = "black";
  };

  const handleEventClick = (info) => {
    if (!document.getElementById("displayEvent")) {
      const topOffset = info.jsEvent.pageY,
        leftOffset = info.jsEvent.pageX;

      const displayEvent = document.createElement("div");
      displayEvent.id = "displayEvent";
      displayEvent.style.position = "absolute";
      displayEvent.style.top = `${topOffset - 75}px`;
      displayEvent.style.left = `${leftOffset}px`;
      displayEvent.style.height = "auto";
      displayEvent.style.width = "auto";
      displayEvent.innerHTML = info.event.extendedProps["description"];
      displayEvent.style.color = "white";
      displayEvent.style.backgroundColor = "#2c3e50";
      displayEvent.style.borderRadius = "5px";
      displayEvent.style.borderStyle = "solid";
      displayEvent.style.borderWidth = "2px";
      displayEvent.style.borderColor = "black";
      displayEvent.style.zIndex = "9999";
      displayEvent.style.textAlign = "center";
      displayEvent.style.lineHeight = "50px";
      displayEvent.style.verticalAlign = "baseline";
      displayEvent.style.userSelect = "none";

      displayEvent.addEventListener("mousedown", () => {
        document.body.removeChild(document.getElementById("displayEvent"));
      });

      document.body.appendChild(displayEvent);
    }
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
          eventClick={handleEventClick}
          eventClassNames="calenderEvents"
          eventColor="black"
          firstDay={1}
          contentHeight={window.innerWidth > 540 ? "80vh" : "50vh"}
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
                description:
                  "The next awesome Armando, we will put more information here and maybe a link?",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
