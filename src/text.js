// Text Annotation implementation
module.exports = function(Chart) {
	var TextAnnotation = Chart.Element.extend({

		draw: function(ctx) {
			var view = this._view;

			// Canvas setup
      ctx.font = view.font;
      ctx.fillStyle = view.fillStyle;
      ctx.textAlign = view.textAlign;

      // Draw
      ctx.fillText(view.value, view.x, view.y);
		}
	});

	function textUpdate(obj, options, chartInstance) {
		var model = obj._model = obj._model || {};

		var scale = chartInstance.scales[options.scaleID];
		var pixel = scale ? scale.getPixelForValue(options.y) : NaN;
		var chartArea = chartInstance.chartArea;

		if (!isNaN(pixel)) {
      model.x = chartArea.left + options.leftOffset;
      model.y = pixel + option.verticalOffset;
		}

    model.value = options.value;
	  model.textAlign = options.textAlign;
    model.fillStyle = options.fillStyle;
    model.font = options.font;
  }


	return {
		Constructor: TextAnnotation,
		update: textUpdate
	};
};
