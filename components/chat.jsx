import React, { useEffect } from "react";

const FacebookChat = () => {
  useEffect(() => {
    // Load Facebook SDK script
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return (
    <div
      className="fb-customerchat"
      attribution="setup_tool"
      page_id="107823518650991"
      logged_in_greeting="Hi! How can we help you?"
      logged_out_greeting="Hi! How can we help you?"
    ></div>
  );
};

export default FacebookChat;
