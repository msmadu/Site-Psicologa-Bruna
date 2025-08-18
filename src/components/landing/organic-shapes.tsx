export default function OrganicShapes() {
  return (
    <section className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative h-48">
          <svg
            className="absolute top-0 left-1/4 w-64 h-auto text-accent opacity-30"
            viewBox="0 0 200 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M 10,50 C 10,20 60,10 100,25 S 190,80 190,50 C 190,20 140,10 100,25 S 10,80 10,50 Z"
              stroke="none"
              transform="rotate(15 100 50)"
            />
          </svg>

          <svg
            className="absolute bottom-0 right-1/4 w-80 h-auto text-primary opacity-20"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M45.1,-58.3C58.9,-49.4,70.8,-35.1,75.1,-19.1C79.5,-3.1,76.3,14.6,67.7,28.2C59.1,41.8,45.1,51.3,30.5,58.3C15.8,65.2,0.5,69.5,-15.1,68.4C-30.7,67.3,-46.6,60.8,-57.4,49.5C-68.2,38.2,-73.9,22.2,-74.8,5.7C-75.7,-10.8,-71.8,-27.8,-62.1,-39.8C-52.5,-51.7,-37.1,-58.5,-22.4,-62.8C-7.7,-67.1,6.3,-68.8,18.9,-66.4C31.5,-63.9,45.1,-58.3,45.1,-58.3Z"
              transform="translate(100 100) scale(0.8)"
            />
          </svg>
          
           <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-auto text-secondary opacity-25"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M52.4,-45.5C65.6,-28.9,72.4,-7.8,69.3,10.6C66.1,28.9,53,44.5,36.9,54.1C20.8,63.7,1.8,67.3,-18.3,63.9C-38.3,60.5,-59.5,50.1,-69.3,33.8C-79.1,17.5,-77.6,-4.8,-68.6,-22.9C-59.7,-41,-43.3,-54.9,-26.8,-63.3C-10.2,-71.7,6.5,-74.6,23.1,-68.6C39.7,-62.7,46,-48.9,52.4,-45.5Z"
              transform="translate(100 100) scale(0.7)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
