
import './App.css';

function App() {
  return (
    <div>
      <div className="site-title ">

        <div className="site-flex ">
          <h1 className="Logo">| STORIES </h1>
          <h1 className="btn1"> Course</h1>


        </div>
      </div>
      <div className="card">
        <div className="card_background_img"></div>
        <div className="card_profile_img"></div>
        <div className="user_details">
          <div >
            <div>
              <h3 className="Name">Anuj Gosalia</h3>

              <div className='Flex , Number' >
                <div className="RoundNumberContainer">
                  <h2 className="Number">6342</h2>
                  <h2 className="Number">Followers</h2>
                </div>

                <div className="Following,">
                  

                  <h2 className="Number">245</h2>
                  <h2 className="Number">Following</h2>
                </div>

              </div>

            </div>

            <div className="Set">
              <p>Co-founder & CEO at Terribly Tiny Tales</p>
              <a href='https://www.instagram.com/anujgosalia' target="blank"> https://www.instagram.com/anujgosalia </a>

            </div>

            <div >
              <img src="https://www.shutterstock.com/image-vector/white-like-approval-thumb-on-260nw-1598757370.jpg" alt="Like" style={{ height: "54px", marginLeft: "6%", marginTop: "10px" }} />
            </div>
          </div>

        </div>


        <div className="Line">
          <div className="Blogs">
            <div>
              <h2>A changing world Order</h2>
              <p>This is the content of my first post. Lorem ipsum dolor sit amet.</p>
              <p className="Time">2 hours ago 100 views. Created by johndoe</p>
            </div>

            <div>
              <h2>A changing world Order one</h2>
              <p>This is the content of my first post. Lorem ipsum dolor sit amet.</p>
              <p className="Time">2 hours ago 10 views Created by sai</p>
            </div>

            <div>
              <h2>A changing world Orderthree</h2>
              <p>This is the content of my first post. Lorem ipsum dolor sit amet.</p>
              <p className="Time">2 hours ago 300 views Created by ishu</p>
            </div>



          </div>








        </div>

      </div>



    </div>
  );
}

export default App;
