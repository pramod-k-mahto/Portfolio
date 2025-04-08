import style from "./contact.module.css";
function Contact() {
  return (
    <>
      <div className={style.main_div} id='contact'>
        <h1>Contact</h1>
        <h3>Don't be shy hit me Up!</h3>
        <div className={style.maininfo}>
          {/* location */}
          <div className={style.contact_item}>
            <div className={style.contact_icon}>
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className={style.contact_text}>
              <h4>Location</h4>
              <p>Kathamndu Nepal</p>
            </div>
          </div>
          {/* end location */}

          {/* E_Mail */}
          <div className={style.contact_item}>
            <div className={style.contact_icon}>
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className={style.contact_text}>
              <h4>E-Mail</h4>
              <p>Mahtop324@gmail.com</p>
            </div>
          </div>
          {/*end  E_Mail */}
        </div>
      </div>
    </>
  );
}

export default Contact;