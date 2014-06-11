Template.videos.rendered = function () {
      jwplayer(this.data.divSelector).setup({
         playlist    : this.data.url,
         width       : this.data.width,
         aspectratio : this.data.aspectratio
      });
   };