function exportChartInPDF() {
	
	var docDefinition = {
	         content: [
		   {
		      image: $(PF('chaart').exportAsImage()).attr('src'),
		      width:400,
		      height:300
		   }		
		 ]
	    }
	console.warn("Test " + $(PF('chaart').exportAsImage()).attr('src'));
      pdfMake.createPdf(docDefinition).open();
      pdfMake.createPdf(docDefinition).download('notesStatisticsChart.pdf');
      
   }
 

//var oldOnChange = PF('colorPickerWV').cfg.onChange;
//$(document.body).children('.ui-colorpicker-container').data('colorpicker').onChange =
//function(b,d,c) {
//   oldOnChange.apply(this, [b,d,c]);
//   console.log('valueChanged:should be remoteCommand with process of the colorPicker');
// };
 
 var oldonChange = PF('colorPickerWV').cfg.onChange;
 $(document.body).children('.ui-colorpicker-container').each(
     function(i, element) {
         var overlay = $(element), options = overlay.data('colorpicker');
         if (options.id == PF('colorPickerWV').id) {
             _self = PF('colorPickerWV');
             options.onChange = function(a, b, c) {
                 oldonChange.apply(_self, [a, b, c ]);
                 clearTimeout(_self.submitTimer);
                 _self.submitTimer = setTimeout(function() {
                     console
                        .log('Data is changed: should be remoteCommand with process of the colorPicker')
                     //The call below is what the name of the remote command is
                     //window[widgetVar+"_change"]();

                 }, 250);
             }
         }
     }
 )
