// https://fullcalendar.io/docs

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Kalender = () => {
  return (
    <div className="contentContainer">
      <div id="kalenderContainer" className="content">
        <h1>hello there</h1>
        <FullCalendar
          id="mahKalender"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          weekends={true}
          firstDay={1}
          events={[
            {
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

export default Kalender;
