export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-1">
        Welcome to My Portfolio
      </h2>
      <div className="flex flex-row justify-evenly">
        <div className="flex justify-between p-2">
          <h3 className="font-semibold text-gray-700 text-sm pr-1">Company:</h3>
          <p className="text-gray-600 text-sm">Verizon</p>
        </div>
        <div className="flex justify-between p-2">
          <h3 className="font-semibold text-gray-700 text-sm pr-1">Cohort Dates:</h3>
          <p className="text-gray-600 text-sm">August 2024 - August 2025</p>
        </div>
      </div>
      <p className="text-gray-600 grow mt-2 p-4 text-lg">
        My name is Sione Joseph and this is my portfolio containing the five major projects completed during my time with Multiverse. These projects allowed me to cultivate and
        nurture my skills in full-stack development, deployment, security, testing and, most importantly, the ability to utilize all of these skills in a team environment. With the
        invaluable help of my Multiverse Coach, Laurie Corrin, I have been able to overcome each challenge thrown my way to complete this program in triumph!
        
      </p>
    </div>
  );

}