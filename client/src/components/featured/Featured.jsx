import './Featured.scss'

const Featured = () => {
  return (
      <div className="featured">
      <div className="featuredItem">
          <img src="https://cf.bstatic.com/xdata/images/city/640x640/664714.webp?k=81d05e5bbbe018b5fbfdd4d70b944554a71f47a679e16cf3d0a581ee3b049c60&o=" alt="" />
          <div className="featuredTitles">
              <h1>Kyiv</h1>
              <h2>123 properties</h2>
          </div>
      </div>
          <div className="featuredItem">
              <img src="https://cf.bstatic.com/xdata/images/city/640x640/664728.webp?k=e8c08026f1eb8db1a8781e4d46d4dccf1bfebaeb63d57688246bdd24b316767d&o=" alt="" />
              <div className="featuredTitles">
                  <h1>Odessa</h1>
                  <h2>200 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://cf.bstatic.com/xdata/images/city/640x640/972774.webp?k=ce514cc7edcd6f20d5223676bdaa0ef3f95f6a3b5befcb4934107feaedf8132e&o=" alt="" />
              <div className="featuredTitles">
                  <h1>Lviv</h1>
                  <h2>236 properties</h2>
              </div>
          </div>
      </div>
  )
}

export default Featured