var audio = {
  init: function () {
    console.log("audio.init called");

    if (typeof $ === "undefined") {
      console.error("jQuery not loaded");
      return;
    }

    $(function () {
      console.log("DOM ready");
      if (typeof $.fn.mediaelementplayer === "undefined") {
        console.error("MediaElement.js not loaded properly");
        return;
      }

      audio.components.media();
    });
  },
  components: {
    media: function (target) {
      var media = $("audio.fc-media", target || "body");
      console.log("Found audio elements: ", media.length);

      if (media.length) {
        media.mediaelementplayer({
          audioHeight: 40,
          features: [
            "playpause",
            "current",
            "duration",
            "progress",
            "volume",
            "tracks",
            "fullscreen",
          ],
          alwaysShowControls: true,
          timeAndDurationSeparator: "<span></span>",
          iPadUseNativeControls: true,
          iPhoneUseNativeControls: true,
          AndroidUseNativeControls: true,
        });

        console.log("MediaElement initialized.");
      }
    },
  },
};

audio.init();
