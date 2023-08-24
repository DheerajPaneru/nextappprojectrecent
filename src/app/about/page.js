"use client"
import React, {useEffect,useState} from 'react'
import "./about.css"
import { useAuth } from '../context/page'
const page = () => {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false);
  const fetchnews = async () => {
setLoading(true)
    try {
      const x = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=9")
      const p = await x.json()
      console.log(p)
      setdata(p)
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false);
    }

  }

  useEffect(() => {
   fetchnews()
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
        !loading
      ) {
        fetchnews();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <>

      <div className="container">
        <div className="heading">
          <h1>Assignment</h1>
        </div>
        <div className="row" style={{flexDirection:"column"}}>


          {data && data.map((c,id) => {
            return (
              <div key={id}>

                <div className="card" style={{ marginRight: 5 }}>
                  <div className="card-header">
                    <h1>{c?.name}</h1>
                  </div>
                  <div>
                    <img style={{ width: "100%" }} src={c?.image_url
                    } alt="" />
                  </div>
                  <div className="card-body">
                    <p>
                      {c?.description}
                    </p>
                    <a href={c?.url} className="btn">
                      View More
                    </a>
                  </div>
                </div>


              </div>
            )

          })}
        </div>
        {loading && <p>Loading...</p>}
      </div>



    </>
  )
}

export default page