import './index.css'

const HomePage = () => (
  <div className="home-page-container">
    <div className="first-container">
      <div className="logo-container">
        <p>LOGO</p>
      </div>
      <div className="tab-container">
        <div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497035/home_ecwkm2.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Home</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497037/notification_zvxyzb.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Notification</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Shop</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497398/message_qytqln.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Conversation</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497036/message_pd6jhw.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Wallet</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497035/favorite_attvwc.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Subscription</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497037/profile_adzh5l.png"
              className="logo-tab"
              alt="tab"
            />
            <p>My profile</p>
          </div>
          <div className="card-tab-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717497038/setting_np06x4.png"
              className="logo-tab"
              alt="tab"
            />
            <p>Settings</p>
          </div>
        </div>
        <div className="card-tab-cont">
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1717496717/logout_msks80.png"
            className="logo-tab"
            alt="tab"
          />
          <button type="button" className="logout-btn">
            Logout
          </button>
        </div>
      </div>
      <div className="copyright-cont">
        <p>2022@ logo name</p>
        <p>Developed by ivan Infotech</p>
      </div>
    </div>
    <div className="mid-container">
      <div className="top-search-container">
        <div className="common-cont">
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1715453359/search-normal_gaxqcp.png"
            alt="search"
            className="logo-tab"
          />
          <input
            type="search"
            className="search-input"
            placeholder="Search here..."
          />
        </div>
        <div className="common-cont">
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1716279603/Frame_1_svudqj.png"
            alt="search"
            className="logo-tab"
          />
          <p>Filters</p>
        </div>
      </div>
      <div className="mid-card-scroll">
        <div className="mid-card-container">
          <div className="name-details-cont">
            <div className="profile-container">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500025/pexels-ali-pazani-2613260_uwhu4q.png"
                alt="profile"
                className="profile-img"
              />
              <div className="details-customer">
                <p className="font">
                  Lara Leones <br />
                  @thewallart
                </p>
              </div>
            </div>
            <div>
              <p>...</p>
            </div>
          </div>
          <p className="font">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <span className="red">Read More..</span>
          </p>
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500027/pexels-humphrey-muleba-2045248_eqiw3w.png"
            className="big-img"
            alt="img"
          />
          <div className="common-cont">
            <div className="common-cont">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">9.8K</p>
            </div>
            <div className="common-cont common-space-left">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500024/comment_c8epfr.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">8.6K</p>
            </div>
            <div className="common-cont common-space-left">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500035/share_a5u7d3.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">7.2K</p>
            </div>
          </div>
        </div>
        <div className="mid-card-container">
          <div className="name-details-cont">
            <div className="profile-container">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500033/pexels-imad-clicks-9810659_cfo9qe.png"
                alt="profile"
                className="profile-img"
              />
              <div className="details-customer">
                <p className="font">
                  Thomas J. <br />
                  @thecustomcreater
                </p>
              </div>
            </div>
            <div>
              <p>...</p>
            </div>
          </div>
          <p className="font">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <span className="red">Read More..</span>
          </p>
          <img
            src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500034/pexels-tobias-bj%C3%B8rkli-2236382_mrsici.png"
            className="big-img"
            alt="img"
          />
          <div className="common-cont">
            <div className="common-cont">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1715454035/heart_nioema.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">9.8K</p>
            </div>
            <div className="common-cont common-space-left">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500024/comment_c8epfr.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">8.6K</p>
            </div>
            <div className="common-cont common-space-left">
              <img
                src="https://res.cloudinary.com/drgheojrx/image/upload/v1717500035/share_a5u7d3.png"
                alt="logo"
                className="tab-logo"
              />
              <p className="common-space-left">7.2K</p>
            </div>
          </div>
        </div>
        <div className="mid-footer-cont">
          <div className="footer-card-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502338/pexels-pixabay-164455_wmydku.png"
              className="footer-img"
              alt="img-footer"
            />
            <p className="font">Modern Wall Decor Framed Painting</p>
            <div className="footer-details">
              <p>$199.9</p>
              <div className="common-cont">
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
          </div>
          <div className="footer-card-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/Image_40_nbdtvl.png"
              className="footer-img"
              alt="img-footer"
            />
            <p className="font">Modern Wall Decor Framed Painting</p>
            <div className="footer-details">
              <p>$199.9</p>
              <div className="common-cont">
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
          </div>
          <div className="footer-card-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502336/Image_39_vgpsxk.png"
              className="footer-img"
              alt="img-footer"
            />
            <p className="font">Modern Wall Decor Framed Painting</p>
            <div className="footer-details">
              <p>$199.9</p>
              <div className="common-cont">
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
          </div>
          <div className="footer-card-cont">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/pexels-max-vakhtbovych-6782342_tf6ufd.png"
              className="footer-img"
              alt="img-footer"
            />
            <p className="font">Modern Wall Decor Framed Painting</p>
            <div className="footer-details">
              <p>$199.9</p>
              <div className="common-cont">
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
                <img
                  src="https://res.cloudinary.com/drgheojrx/image/upload/v1717502337/star_h1s9sk.png"
                  alt="star"
                  className="star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="last-container">
      <div className="top-last-container">
        <p>Become a seller</p>
      </div>
      <div className="artist-container">
        <div className="common-cont">
          <p className="artist">Artist</p>
          <p className="font">Photographers</p>
        </div>
        <div className="last-card-cont1">
          <div className="card-in-to-card-container">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717506110/pexels-anastasia-shuraeva-4406721_z378fo.png"
              alt="img"
              className="img-card"
            />
            <p>
              Thomas Edward <br />
              @thewildwithyou
            </p>
          </div>
        </div>
        <div className="last-card-cont2">
          <div className="card-in-to-card-container">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717511140/pexels-andrea-piacquadio-3771118_jofqxj.png"
              alt="img"
              className="img-card"
            />
            <p>
              Chris Doe <br />
              @thewildwithyou
            </p>
          </div>
        </div>
        <div className="last-card-cont3">
          <div className="card-in-to-card-container">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717511140/pexels-antoni-shkraba-4442102_zxma0u.png"
              alt="img"
              className="img-card"
            />
            <p>
              Emillie Jones <br />
              @thewildwithyou
            </p>
          </div>
        </div>
        <div className="last-card-cont4">
          <div className="card-in-to-card-container">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717511140/pexels-antoni-shkraba-4442005_bszhhe.png"
              alt="img"
              className="img-card"
            />
            <p>
              jasica williams <br />
              @thewildwithyou
            </p>
          </div>
        </div>
        <div className="last-card-cont5">
          <div className="card-in-to-card-container">
            <img
              src="https://res.cloudinary.com/drgheojrx/image/upload/v1717506110/pexels-anastasia-shuraeva-4406721_z378fo.png"
              alt="img"
              className="img-card"
            />
            <p>
              Thomas Edward <br />
              @thewildwithyou
            </p>
          </div>
        </div>
        <div className="last-footer-details">
          <p>Privacy</p>
          <p>Terms of service</p>
          <p>Cookie notice</p>
        </div>
      </div>
    </div>
  </div>
)

export default HomePage
