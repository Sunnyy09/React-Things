import React from "react";

function About() {
  return (
    <div className="w-full font-serif min-h-screen">
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl text-gray-700 my-8 font-bold">About me</h1>
        </div>
        <div className="w-[650px] border-2 border-gray-400 rounded-lg p-6">
          <div className="w-full text-gray-700">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
              modi praesentium debitis sequi, eveniet repellat tempore? Totam
              nihil vero et consequuntur ea, eaque iusto blanditiis dignissimos,
              ut qui dolorum quasi alias veritatis. Nisi labore debitis iure.
              Soluta mollitia iste officiis cum, officia non cumque fugit autem
              dignissimos labore, consectetur aperiam.
            </p>
            <hr className="h-[2px] my-4 bg-gray-200" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              veniam ea accusantium minima architecto commodi, perspiciatis
              debitis. Rem non a eos vero aspernatur minus ratione adipisci
              nesciunt praesentium. Fugiat facere iusto est consequuntur quidem
              praesentium minus omnis illum, at voluptas.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center py-12">
          <img
            src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?t=st=1735384698~exp=1735388298~hmac=21f6d575bd8db045be055d644cf809797080fef4ec63a2e242128237b8b11680&w=740"
            alt=""
            className="w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
