import { useLoaderData } from "react-router-dom";
import EventsCard from "../../Others/EventsCard";


const Events = () => {

    const cards= useLoaderData()
    return (
        <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold m-4 text-blue-800 text-center">Our School Events</h1>
        <div>
        <EventsCard cards={cards} />
        </div>
      </div>
    );
};

export default Events;