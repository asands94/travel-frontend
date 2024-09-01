import { Link } from 'react-router-dom'
function GuestHome() {
  return (
    <>
      <section className='flex flex-col items-center'>
        <div className='flex justify-center'>
          <div className='rounded-lg bg-pure shadow-md p-6 h-32 flex flex-col justify-center'>
            <h1 className='text-5xl'>Trip Planner</h1>
            <h2 className='text-3xl'>Keep track of all your upcoming trips.</h2>
          </div>
          <img
            className='rounded-lg w-1/3'
            src='https://api.time.com/wp-content/uploads/2023/06/travel-ai-help-01.jpg'
            alt=''
          />
        </div>

        <button className='bg-primary rounded-full py-3 px-10 mt-4 font-medium text-white'>
          <Link to='/register'>Sign Up</Link>
        </button>
      </section>

      <section className='bg-secondary flex flex-col items-center my-10'>
        <div className='flex justify-center p-10 w-full h-full'>
          <div className='flex flex-col items-center mx-4  w-full'>
            <h3 className='pb-5'>Add a Trip</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Effortlessly organize your next adventure by adding your
              destination, dates, and other essential trip details. View all
              your trips at a glance.
            </p>
          </div>

          <div className='flex flex-col items-center mx-4 w-full'>
            <h3 className='pb-5'>Add Your Itinerary</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Map out your entire trip with a personalized itinerary. From
              must-see attractions to hidden gems, ensure every day is perfectly
              planned.
            </p>
          </div>

          <div className='flex flex-col items-center mx-4  w-full'>
            <h3 className='pb-5'>Add Your Expenses</h3>
            <p className='shadow-md h-32 bg-pure w-full flex flex-col items-center rounded-lg p-5'>
              Keep track of your spending with ease by logging your expenses.
              Stay within budget and enjoy peace of mind knowing exactly where
              your money goes.
            </p>
          </div>
        </div>

        <button className='bg-primary rounded-full py-3 px-10 mt-4 font-medium text-white mb-10'>
          <Link to='/register'>Sign Up</Link>
        </button>
      </section>
    </>
  )
}

export default GuestHome
