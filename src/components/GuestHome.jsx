import { Link } from 'react-router-dom'
import airplane from '../assets/airplane-woman-no-bg.png'
function GuestHome() {
  return (
    <>
      <section className='flex flex-col items-center mt-body mx-body'>
        <div className='flex justify-center'>
          <div className='rounded-lg flex flex-col justify-center w-1/2'>
            <h1 className='text-5xl font-semibold'>
              Plan, Explore, and Track Your Perfect Trip
            </h1>
            <h2 className='text-2xl'>
              From itinerary planning to expense tracking, Trip Planner helps
              you stay organized and make the most of your adventures.
            </h2>
            <button className='bg-primary rounded-full py-3 px-body mt-4 font-medium text-white w-1/5'>
              <Link to='/register'>Sign Up</Link>
            </button>
          </div>
          <img
            className='rounded-lg w-1/2'
            src={airplane}
            alt='woman sitting on airplane'
          />
        </div>
      </section>

      <section className='bg-secondary flex flex-col items-center mt-body'>
        <div className='flex justify-center w-full h-full px-body py-body'>
          <div className='flex flex-col items-center w-full'>
            <h3 className='pb-5 font-semibold'>Add a Trip</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Effortlessly organize your next adventure by adding your
              destination, dates, and other essential trip details. View all
              your trips at a glance.
            </p>
          </div>

          <div className='flex flex-col items-center w-full mx-body'>
            <h3 className='pb-5 font-semibold'>Add Your Itinerary</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Map out your entire trip with a personalized itinerary. From
              must-see attractions to hidden gems, ensure every day is perfectly
              planned.
            </p>
          </div>

          <div className='flex flex-col items-center w-full'>
            <h3 className='pb-5 font-semibold'>Add Your Expenses</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Keep track of your spending with ease by logging your expenses.
              Stay within budget and enjoy peace of mind knowing exactly where
              your money goes.
            </p>
          </div>
        </div>

        <button className='bg-primary rounded-full py-3 px-body mt-4 font-medium text-white mb-body'>
          <Link to='/register'>Sign Up</Link>
        </button>
      </section>
    </>
  )
}

export default GuestHome
