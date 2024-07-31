import React from 'react'

const CountDown = () => {
  return (
    <div>
        <div className="count-down-area pb-120">
<div className="container">
<div className="row justify-content-between">
<div className="col-lg-3 col-md-6 col-sm-6">

<div className="single-counter text-center">
<span className="counter">2705</span>
<p>Projects Completed</p>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">

<div className="single-counter active text-center">
<span className="counter">480</span>
<p> Active Clients</p>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">

<div className="single-counter text-center">
<span className="counter">226</span>
<p>Active Enginners</p>
</div>
</div>
<div className="col-lg-3 col-md-6 col-sm-6">

<div className="single-counter text-center">
<span className="counter">9774</span>
<p>Happy Clients</p>
</div>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default CountDown