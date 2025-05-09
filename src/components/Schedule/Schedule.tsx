import React from "react";

type ScheduleClass = { label: string; time: string; highlight?: boolean };
type ScheduleDay = { day: string; dayEs: string; classes: ScheduleClass[] };

const scheduleData: ScheduleDay[] = [
  {
    day: "Monday",
    dayEs: "Lunes",
    classes: [
      { label: "Kids", time: "5:30 - 6:30 pm" },
      { label: "Adults", time: "6:30 - 8:15 pm" },
    ],
  },
  {
    day: "Wednesday",
    dayEs: "Miercoles",
    classes: [
      { label: "Kids", time: "5:30 - 6:30 pm" },
      { label: "Adults", time: "6:30 - 8:15 pm" },
    ],
  },
  {
    day: "Friday",
    dayEs: "Viernes",
    classes: [
      { label: "Kids Sparring / Kumite", time: "5:30 - 6:30 pm" },
      { label: "Adults Sparring / Kumite", time: "6:30 - 8:15 pm" },
    ],
  },
  {
    day: "Saturday",
    dayEs: "Sabado",
    classes: [
      { label: "Adult Class Kettlebells", time: "8:00 - 9:00 am", highlight: true },
      { label: "Kettlebells for fighters", time: "9:00 - 10:00 am", highlight: true },
    ],
  },
];

const Schedule: React.FC = () => (
  <section className="schedule-section theme-bg-blue py-5" id="schedule">
    <div className="container">
      <h2 className="h2 fw-bold text-center mb-4 theme-text-red">Class Schedule</h2>
      <div className="row justify-content-center g-4">
        {scheduleData.map((day) => (
          <div className="col-12 col-sm-6 col-lg-3" key={day.day}>
            <div className="card schedule-card h-100 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="schedule-card__header w-100 text-center mb-3 py-2" style={{ background: 'var(--color-red)', color: '#fff', borderRadius: '4px' }}>
                  <div className="fw-bold">{day.day}</div>
                  <div className="small">{day.dayEs}</div>
                </div>
                <ul className="list-unstyled w-100 mb-0">
                  {day.classes.map((cls, cIdx) => (
                    <li key={cIdx} className="mb-3 schedule-card__class text-center">
                      <span className="fw-semibold d-block">{cls.label}</span>
                      <span className={cls.highlight ? "theme-text-red fw-bold" : "theme-text-red"} style={{ fontWeight: 500 }}>
                        {cls.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="small mt-4 text-center theme-text-light">
        * Weekly Training Schedule Is Subject to Change. Please come to class on time and properly dressed.
      </div>
    </div>
  </section>
);

export default Schedule;
