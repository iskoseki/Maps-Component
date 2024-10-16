import React from "react";

export default function ErrorComponent({ error }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-8">
      <svg
        className=" mb-11"
        width="150"
        height="150"
        viewBox="0 0 150 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.75 0C13.7772 0 9.00805 1.97544 5.49175 5.49175C1.97544 9.00805 0 13.7772 0 18.75L0 131.25C0 136.223 1.97544 140.992 5.49175 144.508C9.00805 148.025 13.7772 150 18.75 150H131.25C136.223 150 140.992 148.025 144.508 144.508C148.025 140.992 150 136.223 150 131.25V18.75C150 13.7772 148.025 9.00805 144.508 5.49175C140.992 1.97544 136.223 0 131.25 0L18.75 0ZM75 37.5C80.0156 37.5 83.9437 41.8312 83.4375 46.8281L80.1562 79.7062C80.046 80.9979 79.455 82.2011 78.5002 83.0778C77.5454 83.9546 76.2963 84.4411 75 84.4411C73.7037 84.4411 72.4546 83.9546 71.4998 83.0778C70.545 82.2011 69.954 80.9979 69.8438 79.7062L66.5625 46.8281C66.4447 45.6491 66.5751 44.4584 66.9454 43.3328C67.3157 42.2072 67.9177 41.1717 68.7126 40.2929C69.5075 39.4141 70.4776 38.7116 71.5605 38.2306C72.6434 37.7495 73.8151 37.5007 75 37.5ZM75.0187 93.75C77.5051 93.75 79.8897 94.7377 81.6479 96.4959C83.406 98.254 84.3937 100.639 84.3937 103.125C84.3937 105.611 83.406 107.996 81.6479 109.754C79.8897 111.512 77.5051 112.5 75.0187 112.5C72.5323 112.5 70.1478 111.512 68.3896 109.754C66.6315 107.996 65.6437 105.611 65.6437 103.125C65.6437 100.639 66.6315 98.254 68.3896 96.4959C70.1478 94.7377 72.5323 93.75 75.0187 93.75Z"
          fill="#C04356"
        />
      </svg>

      <h1 className="text-[32px] text-[#C04356] font-bold">{error.message}</h1>
      <p className="text-[24px]  max-w-3xl text-pretty text-[#757575] mt-[12px] mb-8">
        Lo sentimos, ha ocurrido un error inesperado.
      </p>
      <a
        href="/cotizacion/"
        className={`flex flex-shrink-0 justify-center  hover:bg-[#E65369] items-center gap-2.5 py-2 px-6 w-full md:w-[368px] h-[40px]  bg-[#a6192e] Sans" '] text-white text-center rounded-5xl leading-normal transition-all duration-300 ease-in-out pointer`}
      >
        Cotizar
      </a>
      <p className="text-[16px] text-[#9E9E9E] py-[33px]">
        O seguir buscando en las siguientes categorías:
      </p>
      <div className="flex gap-[16px]">
        <a className="text-[16px] font-[600] underline text-[#9E9E9E]" href="/">
          Home
        </a>
        <a
          className="text-[16px] text-[#9E9E9E] font-thin underline"
          href="/quienes-somos/"
        >
          ¿Quiénes somos?
        </a>
      </div>
    </div>
  );
}
