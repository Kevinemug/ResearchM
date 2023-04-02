import React, { useState, useEffect } from "react";
import $ from "jquery";

const SiteSticky = () => {
  useEffect(() => {
    $(".js-sticky-header").sticky({ topSpacing: 0 });
  }, []);

  return null;
};

const SiteMenuClone = () => {
  useEffect(() => {
    $(".js-clone-nav").each(function () {
      const $this = $(this);
      $this
        .clone()
        .attr("class", "site-nav-wrap")
        .appendTo(".site-mobile-menu-body");
    });

    const timeoutId = setTimeout(() => {
      let counter = 0;
      $(".site-mobile-menu .has-children").each(function () {
        const $this = $(this);
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find(".arrow-collapse").attr({
          "data-toggle": "collapse",
          "data-target": `#collapseItem${counter}`,
        });

        $this.find("> ul").attr({
          class: "collapse",
          id: `collapseItem${counter}`,
        });

        counter++;
      });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleClickArrowCollapse = (e) => {
      const $this = $(e.target);
      if ($this.closest("li").find(".collapse").hasClass("show")) {
        $this.removeClass("active");
      } else {
        $this.addClass("active");
      }
      e.preventDefault();
    };

    const handleResize = () => {
      const $this = $(window),
        w = $this.width();

      if (w > 768) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    };

    const handleMenuToggle = (e) => {
      const $this = $(e.target);
      e.preventDefault();

      if ($("body").hasClass("offcanvas-menu")) {
        $("body").removeClass("offcanvas-menu");
        $this.removeClass("active");
      } else {
        $("body").addClass("offcanvas-menu");
        $this.addClass("active");
      }
    };

    const handleClickOutside = (e) => {
      const container = $(".site-mobile-menu");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("offcanvas-menu")) {
          $("body").removeClass("offcanvas-menu");
        }
      }
    };

    $("body").on("click", ".arrow-collapse", handleClickArrowCollapse);
    $(window).resize(handleResize);
    $("body").on("click", ".js-menu-toggle", handleMenuToggle);
    $(document).mouseup(handleClickOutside);

    return () => {
      $("body").off("click", ".arrow-collapse", handleClickArrowCollapse);
      $(window).off("resize", handleResize);
      $("body").off("click", ".js-menu-toggle", handleMenuToggle);
      $(document).off("mouseup", handleClickOutside);
    };
  }, []);

  return null;
};

const MyComponent = () => {
  return (
    <div>
      <SiteSticky />
      <SiteMenuClone />
      {/* Your other React components */}
    </div>
  );
};

export default MyComponent;
