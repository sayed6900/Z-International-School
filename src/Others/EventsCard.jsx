import { useState } from "react";

const EventsCard = ({cards}) => {

    const {id,name,date,pic,time} = cards
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedCards = cards.slice(startIndex, startIndex + itemsPerPage);

  return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedCards.map((card, index) => (
            <div key={index} className="card border-4 border-blue-300">
              <img className="h-52 rounded-t-xl" src={card.pic} alt={card.name} />
              <div className="card-body">
                <h2 className="card-title">{card.name}</h2>
                <p>Date: {card.date}</p>
                <p>Time: {card.time}</p>
               
              </div>
            </div>
          ))}
        </div>
        <div className="join mt-4">
          <button
            className="join-item btn btn-square"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            «
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`join-item btn btn-square ${
                currentPage === index + 1 ? "btn-active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="join-item btn btn-square"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
   
  );
};

export default EventsCard;
