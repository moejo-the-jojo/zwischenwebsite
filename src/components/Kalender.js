// https://fullcalendar.io/docs
import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Calendar = () => {
  React.useEffect(() => {}, []);

  const handleEventEnter = (arg) => {
    console.log(arg.event.title);
  };

  const handleEventLeave = (arg) => {
    console.log("i left " + arg.event.el);
  };

  return (
    <div className="contentContainer">
      <div
        id="kalenderContainer"
        className="content"
        style={{ gridArea: "1 / 3 / 1 / 1" }}
      >
        <h1 style={{ textAlign: "center" }}>Show-Termine</h1>
        <FullCalendar
          id="mahKalender"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          eventMouseEnter={handleEventEnter}
          eventMouseLeave={handleEventLeave}
          eventClassNames="calenderEvents"
          eventColor="black"
          firstDay={1}
          events={[
            {
              id: "Armando",
              title:
                "Armando ist mein Lieblingsfabelwesen, es ist einfach AMAZING",
              date: "2023-08-01",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Calendar;
