import { useState } from "react";
import { WhatsappIcon } from "./icons/whatsapp-icon";
import { ChevronLeftIcon } from "./icons/chevron-left";
import { ChevonRightIcon } from "./icons/chevon-right";

function App() {
  const [index, setIndex] = useState(0);

  function onNext() {
    console.log(index);
    if (index != 5) {
      setIndex((prev) => prev + 1);
    }
  }

  function onPrev() {
    if (index != 0) {
      setIndex((prev) => prev - 1);
    }
  }

  return (
    <div className="w-full h-screen bg-light-blue grid place-items-center  ">
      {/*  Mobile*/}
      <div className=" relative w-screen md:hidden flex items-center overflow-hidden">
        <div className="absolute z-50 top-1/2 w-full flex items-center justify-between">
          <button
            onClick={onPrev}
            className=""
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={onNext}
            className=""
          >
            <ChevonRightIcon />
          </button>
        </div>
        <div
          style={{ transform: `translateX(-${index * 100}vw)` }}
          className="flex items-center gap-x-[calc((100vw_-322px))] px-[calc((100vw_-322px)/2)] transition-transform duration-700"
        >
          <Card
            title="General"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/1.png"
          />

          <Card
            title="Pediatrics"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/2.png"
          />
          <Card
            title="Nutritional"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/3.png"
          />
          <Card
            title="Cardiology"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/4.png"
          />
          <Card
            title="Ophthalmology"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/5.png"
          />
          <Card
            title="Orthopedics"
            descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            image="/6.png"
          />
        </div>
      </div>

      <div className="max-w-[1110px] mx-auto hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="General"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/1.png"
        />
        <Card
          title="Pediatrics"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/2.png"
        />
        <Card
          title="Nutritional"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/3.png"
        />
        <Card
          title="Cardiology"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/4.png"
        />
        <Card
          title="Ophthalmology"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/5.png"
        />
        <Card
          title="Orthopedics"
          descrption="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
          image="/6.png"
        />
      </div>
    </div>
  );
}

export default App;

export function Card(props) {
  const { image, title, descrption, className } = props;

  return (
    <div
      className={
        "md:max-w-[350px] max-w-[322px] w-full bg-white shadow-lg shadow-[#03093204] rounded-3xl p-8 space-y-6" +
        className
      }
    >
      <img
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mx-auto aspect-square object-cover"
      />
      <div className="space-y-3 mb-6">
        <p className="text-2xl font-medium font-poppins">{title}</p>
        <p className="text-sm font-normal text-second">{descrption}</p>
      </div>

      <Button>
        {" "}
        <WhatsappIcon /> Book an Appointment
      </Button>
    </div>
  );
}

function Button(props) {
  const { children } = props;

  return (
    <button className="flex whitespace-nowrap items-center gap-x-1.5 bg-btn-gradient rounded-full text-white text-lg font-semibold px-7 py-4">
      {children}
    </button>
  );
}
