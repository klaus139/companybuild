import React from 'react'
import {UtilityPole, GlobeLock  , Cog,} from 'lucide-react'
const Category = () => {
  return (
    <div>
        <div className="categories-area section-padding30">
<div className="container">
<div className="row">
<div className="col-lg-12">

<div className="section-tittle mb-70">
<span>Our Top Services</span>
<h2>Our Best Services</h2>
</div>
</div>
</div>
<div className="row">
<div className="col-lg-4 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-development"></span>
</div>
<div className="cat-cap">
    <div className='flex flex-col mx-auto items-center justify-center'>

    <UtilityPole className='text-[50px] text-blue-900 h-[90px] w-[90px]'/>    
    </div>
<h5><a href="#">Installation of High Rise Telecommunications Mast </a></h5>
<p>We specialize in the installation and maintenance of telecommunications mast.</p>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-result"></span>
</div>
<div className="cat-cap">
<div className='flex flex-col mx-auto items-center justify-center'>

<GlobeLock className='text-[50px] text-blue-900 h-[90px] w-[90px]'/>    
</div>
<h5><a href="#">Heavy Machine Maintenance</a></h5>
<p>We fix, repair and maintain heay machineries like heavy duty generators.</p>
</div>
</div>
</div>
<div className="col-lg-4 col-md-6 col-sm-6">
<div className="single-cat text-center mb-50">
<div className="cat-icon">
<span className="flaticon-team"></span>
</div>
<div className="cat-cap">
<div className='flex flex-col mx-auto items-center justify-center'>

<Cog className='text-[50px] text-blue-900 h-[90px] w-[90px]'/>    
</div>
<h5><a href="#">Tech Support</a></h5>
<p>There are many variations of passages of lorem Ipsum available but the new majority have suffered.</p>
</div>
</div>
</div>
</div>
</div>
</div>

    </div>
  )
}

export default Category