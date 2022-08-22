import React from 'react'

export default function Users({avatar_url, login, html_url}) {
  return (
    <>
    <div className="col-md-2 col-lg-3 mb-3  ">
    <article className='bg-light box-shadow'>
    <img src={avatar_url} alt={login} className="img"/>
    <h5>{login}</h5>
    <a href={html_url} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>View Profile</a>
    </article>
    </div>
    </>
  )
}
