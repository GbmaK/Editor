(function () {
  "use strict";
  const defaultShapes = [
    `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#425FF8" stroke-width="10" fill="cover" />
    </svg>
    `,
  ];

  var shapes = function () {
    const _self = this;

    let ShapeList = defaultShapes;
    if (Array.isArray(this.shapes) && this.shapes.length)
      ShapeList = this.shapes;
    $(`${this.containerSelector} .main-panel`).append(
      `<div class="toolpanel" id="shapes-panel"><div class="content"><p class="title">Elementos</p></div></div>`
    );

    ShapeList.forEach((svg) => {
      $(`${this.containerSelector} .toolpanel#shapes-panel .content`).append(
        `<div class="button">${svg}</div>`
      );
    });

    // Agregar sección templates
    if (Array.isArray(this.templates) && this.templates.length) {
      $(`${this.containerSelector} .main-panel`).append(
        `<div class="toolpanel" id="templates-panel"><div class="content"><p class="title">Templates</p></div></div>`
      );

      this.templates.forEach((svg) => {
        $(
          `${this.containerSelector} .toolpanel#templates-panel .content`
        ).append(`<div class="button">${svg}</div>`);
      });

      $(
        `${this.containerSelector} .toolpanel#templates-panel .content .button`
      ).click(function () {
        let svg = $(this).html();
        try {
          fabric.loadSVGFromString(svg, (objects, options) => {
            var obj = fabric.util.groupSVGElements(objects, options);
            obj.strokeUniform = true;
            obj.strokeLineJoin = "miter";
            obj.scaleToWidth(100);
            obj.scaleToHeight(100);
            obj.set({
              left: 0,
              top: 0,
            });
            _self.canvas.add(obj).renderAll();
            _self.canvas.trigger("object:modified");
          });
        } catch (_) {
          console.error("No se puede agregar la capa");
        }
      });
    }

    $(
      `${this.containerSelector} .toolpanel#shapes-panel .content .button`
    ).click(function () {
      let svg = $(this).html();

      try {
        fabric.loadSVGFromString(svg, (objects, options) => {
          var obj = fabric.util.groupSVGElements(objects, options);
          obj.strokeUniform = true;
          obj.strokeLineJoin = "miter";
          obj.scaleToWidth(100);
          obj.scaleToHeight(100);
          obj.set({
            left: 0,
            top: 0,
          });
          _self.canvas.add(obj).renderAll();
          _self.canvas.trigger("object:modified");
        });
      } catch (_) {
        console.error("No se puede agregar la capa");
      }
    });
  };

  window.ImageEditor.prototype.initializeShapes = shapes;
})();
