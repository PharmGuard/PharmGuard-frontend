import React from 'react'

const Overview = () => {
  return (
    <section className="py-20 bg-secondary-bg" id='overview' aria-label="Overview Section">
      <div className="containers space-y-12">
        <div className='text-center' aria-label='Overview Heading'>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            Complete Visibility, Total Control
          </h2>
          <p className='text-primary-text max-w-lg lg:max-w-xl mx-auto text-lg'>
            See stock levels,, upcoming expiries, and notifications instantly,
            all in one dashboard.
          </p>
        </div>
        <div aria-label='Overview Image'>
            <img src="/overview.svg" alt="Overview of PharmGuard Dashboard" className="w-full max-w-5xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Overview