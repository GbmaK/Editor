/**
 * Define actions to manage tip section
 */
(function () {
  'use strict';

  function tipPanel() {
    const defaultTips = [
      "¿Sabias Que?: Puedes usar las flechas del teclado para mover los objetos por pixeles!",
      "¿Sabias Que?: Con Shift + Click puedes seleccionar y modificar varios objetos a la vez!",
      "¿Sabias Que?: Manten SHIFT mientras rotas un objeto para movimientos con 15° de angulo!",
      "¿Sabias Que?: Manten SHIFT mientras dibujas para movimientos con 15° de angulo!",
      "¿Sabias Que?: Si presionas Ctrl mientras haces Scroll puedes hacer aumentar y disminuir el zoom!",
    ];
    const _self = this;
    $(`${this.containerSelector} .canvas-holder .content`).append(`
    <div id="tip-container">${defaultTips[parseInt(Math.random() * defaultTips.length)]}</div>`)
    this.hideTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).hide();
    }

    this.showTip = function () {
      $(`${_self.containerSelector} .canvas-holder .content #tip-container`).show();
    }

    this.updateTip = function (str) {
      typeof str === 'string' && $(`${_self.containerSelector} .canvas-holder .content #tip-container`).html(str);
    }
  }

  window.ImageEditor.prototype.initializeTipSection = tipPanel;
})();