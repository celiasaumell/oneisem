type TimelineEntry = {
  year: number;
  position: string;
  company: string;
  description: string;
};

const Timeline = (props: TimelineEntry) => {
  return (
    <section className="timeline-entry relative  px-3">
      <h3 className="text-3xl">{props.year}</h3>
      <div className="decoration flex items-center ">
        <span className="circle absolute w-[1rem] h-[1rem] bg-dark-teal rounded-full "></span>
        <span className="underline absolute w-[12rem] border-b-[2px] border-dark-teal/[50%] border-dotted max-w-[100%]"></span>
      </div>
      <p className="pt-2 font-bold text-2xl max-w-[25ch]">{props.position}</p>
      <p className="pt-2">{props.company}</p>
    </section>
  );
};

export default Timeline;
